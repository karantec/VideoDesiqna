import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { deleteLead, getLeadsContent } from "./leadSlice";
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import { showNotification } from '../common/headerSlice';
import InputText from "../../components/Input/InputText";
import DateRangePicker from "../../components/DataPicker";

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewCampaignModal = () => {
        dispatch(openModal({ title: "Add New Campaign", bodyType: MODAL_BODY_TYPES.CAMPAIGN_ADD_NEW }));
    };

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={() => openAddNewCampaignModal()}
            >
                Add New Campaign
            </button>
        </div>
    );
};

function Leads() {
    const { leads } = useSelector((state) => state.lead);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        campaignName: "",
        campaignManager: "",
        campaignDuration: "",
        country: "",
        state: "",
        city: "",
    });

    useEffect(() => {
        dispatch(getLeadsContent());
    }, []);

    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>;
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>;
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>;
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Follow-up</div>;
        else return <div className="badge badge-ghost">Open</div>;
    };

    const deleteCurrentLead = (index) => {
        dispatch(
            openModal({
                title: "Confirmation",
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this lead?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
                    index,
                },
            })
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Here you can perform the submit action, like dispatching an action
        console.log("Form Data Submitted:", formData);
        // Dispatch form data if necessary:
        // dispatch(addNewCampaign(formData));
    };

    const CampaignForm = () => (
        <div className="space-y-4">
            <InputText
                labelTitle="Campaign Name"
                placeholder="Enter campaign name"
                name="campaignName"
                value={formData.campaignName}
                updateFormValue={handleInputChange}
            />
            <InputText
                labelTitle="Campaign Manager"
                placeholder="Enter campaign manager's name"
                name="campaignManager"
                value={formData.campaignManager}
                updateFormValue={handleInputChange}
            />
            <DateRangePicker
                labelTitle="Campaign Duration"
                placeholder="Select date range"
                name="campaignDuration"
                value={formData.campaignDuration}
                updateFormValue={handleInputChange}
            />
            <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <select
                    className="select select-bordered w-full"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <select
                    className="select select-bordered w-full"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                >
                    <option value="">Select State</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                </select>
            </div>
            <InputText
                labelTitle="City"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                updateFormValue={handleInputChange}
            />
            <div className="flex justify-end">
                <button
                    className="btn btn-sm btn-primary mt-4"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Render Campaign Form inside modal */}
            <TitleCard title="Campaign Form">
                {CampaignForm()}
            </TitleCard>
        </>
    );
}

export default Leads;
