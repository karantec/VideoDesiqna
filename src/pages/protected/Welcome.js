import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { Link } from 'react-router-dom';
import TemplatePointers from '../../features/user/components/TemplatePointers';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "" }));
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="w-full max-w-5xl px-4">
                <TemplatePointers />
                <div className="text-center mt-8">
                    <Link to="/app/dashboard">
                        <button className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-lg">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default InternalPage;
