import moment from "moment";
import { useEffect } from "react";
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

    const CampaignForm = () => (
        <div className="space-y-4">
            <InputText
                labelTitle="Campaign Name"
                placeholder="Enter campaign name"
                updateFormValue={(value) => console.log("Campaign Name:", value)}
            />
            <InputText
                labelTitle="Campaign Manager"
                placeholder="Enter campaign manager's name"
                updateFormValue={(value) => console.log("Campaign Manager:", value)}
            />
            <DateRangePicker
                labelTitle="Campaign Duration"
                placeholder="Select date range"
                updateFormValue={(value) => console.log("Campaign Duration:", value)}
            />
            <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <select
                    className="select select-bordered w-full"
                    onChange={(e) => console.log("Country:", e.target.value)}
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
                    onChange={(e) => console.log("State:", e.target.value)}
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
                updateFormValue={(value) => console.log("City:", value)}
            />
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
