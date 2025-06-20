import { useState } from 'react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        specialty: '',
        phone: '',
        bio: '',
        clinicName: '',
        clinicAddress: ''
    });
    const [securityData, setSecurityData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [notificationData, setNotificationData] = useState({
        emailNotifications: true,
        smsNotifications: true,
        appointmentReminders: true,
        queueUpdates: true,
        marketingUpdates: true
    });
    const [appearanceData, setAppearanceData] = useState({
        theme: 'light',
        colorScheme: 'blue',
        compactMode: false
    });
    const [workingHours, setWorkingHours] = useState([
        { day: 'Monday', working: true, start: '09:00 AM', end: '05:00 PM' },
        { day: 'Tuesday', working: true, start: '09:00 AM', end: '05:00 PM' },
        { day: 'Wednesday', working: true, start: '09:00 AM', end: '05:00 PM' },
        { day: 'Thursday', working: true, start: '09:00 AM', end: '05:00 PM' },
        { day: 'Friday', working: true, start: '09:00 AM', end: '05:00 PM' },
        { day: 'Saturday', working: true, start: '10:00 AM', end: '02:00 PM' },
        { day: 'Sunday', working: false, start: '', end: '' }
    ]);
    const [appointmentSettings, setAppointmentSettings] = useState({
        defaultDuration: '15',
        bufferTime: '5'
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleSecurityChange = (e) => {
        const { name, value } = e.target;
        setSecurityData(prev => ({ ...prev, [name]: value }));
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotificationData(prev => ({ ...prev, [name]: checked }));
    };

    const handleAppearanceChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAppearanceData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleWorkingHoursChange = (index, field, value) => {
        const updatedHours = [...workingHours];
        updatedHours[index][field] = value;
        setWorkingHours(updatedHours);
    };

    const handleAppointmentSettingsChange = (e) => {
        const { name, value } = e.target;
        setAppointmentSettings(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        alert('Settings saved successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-64 bg-gray-50 p-4 border-r">
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Profile Information
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('security')}
                                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'security' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Security
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('notifications')}
                                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'notifications' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Notifications
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('appearance')}
                                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'appearance' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Appearance
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('working-hours')}
                                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'working-hours' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Working Hours
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6">
                        {activeTab === 'profile' && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                                    <p className="text-gray-600 mb-6">Update your account profile information and public details</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder='Full Name'
                                                value={profileData.fullName}
                                                onChange={handleProfileChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder='xyz@gmail.com'
                                                value={profileData.email}
                                                onChange={handleProfileChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Specialty</label>
                                            <input
                                                type="text"
                                                name="specialty"
                                                placeholder='Specialty'
                                                value={profileData.specialty}
                                                onChange={handleProfileChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder='+91*********'
                                                value={profileData.phone}
                                                onChange={handleProfileChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Bio</label>
                                        <textarea
                                            name="bio"
                                            placeholder='Write about your expriences'
                                            value={profileData.bio}
                                            onChange={handleProfileChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                        <p className="text-sm text-gray-500 mt-1">Brief description for your profile. This will be displayed publicly.</p>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Clinic Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 mb-2">Clinic Name</label>
                                                <input
                                                    type="text"
                                                    name="clinicName"
                                                    placeholder='xyz clinic'
                                                    value={profileData.clinicName}
                                                    onChange={handleProfileChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">Clinic Address</label>
                                                <input
                                                    type="text"
                                                    name="clinicAddress"
                                                    placeholder='Address'
                                                    value={profileData.clinicAddress}
                                                    onChange={handleProfileChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Profile
                                </button>
                            </form>
                        )}

                        {activeTab === 'security' && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Security Settings</h2>
                                    <p className="text-gray-600 mb-6">Manage your password and account security preferences</p>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Change Password</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-gray-700 mb-2">Current Password</label>
                                                <input
                                                    type="password"
                                                    name="currentPassword"
                                                    value={securityData.currentPassword}
                                                    onChange={handleSecurityChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">New Password</label>
                                                <input
                                                    type="password"
                                                    name="newPassword"
                                                    value={securityData.newPassword}
                                                    onChange={handleSecurityChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={securityData.confirmPassword}
                                                    onChange={handleSecurityChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Make sure your password is at least 8 characters and includes a mix of letters, numbers, and symbols.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Login Sessions</h3>
                                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-medium">Current Session</p>
                                                    <p className="text-sm text-gray-600">Windows 10 - Chrome - Gwalior, India</p>
                                                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active now</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                                >
                                                    Sign Out from All Other Devices
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Update Password
                                </button>
                            </form>
                        )}

                        {activeTab === 'notifications' && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Preferences</h2>
                                    <p className="text-gray-600 mb-6">Manage how you receive notifications and updates</p>

                                    <div className="mb-8">
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Communication Channels</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="emailNotifications"
                                                    name="emailNotifications"
                                                    checked={notificationData.emailNotifications}
                                                    onChange={handleNotificationChange}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="emailNotifications" className="ml-2 block text-gray-700">
                                                    Email Notifications
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="smsNotifications"
                                                    name="smsNotifications"
                                                    checked={notificationData.smsNotifications}
                                                    onChange={handleNotificationChange}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="smsNotifications" className="ml-2 block text-gray-700">
                                                    SMS Notifications
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Notification Types</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="appointmentReminders"
                                                    name="appointmentReminders"
                                                    checked={notificationData.appointmentReminders}
                                                    onChange={handleNotificationChange}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="appointmentReminders" className="ml-2 block text-gray-700">
                                                    Appointment Reminders
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="queueUpdates"
                                                    name="queueUpdates"
                                                    checked={notificationData.queueUpdates}
                                                    onChange={handleNotificationChange}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="queueUpdates" className="ml-2 block text-gray-700">
                                                    Queue Updates
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="marketingUpdates"
                                                    name="marketingUpdates"
                                                    checked={notificationData.marketingUpdates}
                                                    onChange={handleNotificationChange}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="marketingUpdates" className="ml-2 block text-gray-700">
                                                    Marketing & Updates
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Preferences
                                </button>
                            </form>
                        )}

                        {activeTab === 'appearance' && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Appearance Settings</h2>
                                    <p className="text-gray-600 mb-6">Customize how Fliar Plus looks for you</p>

                                    <div className="space-y-6">
                                        {/* Theme Selection */}
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800 mb-3">Theme</h3>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="theme"
                                                        value="light"
                                                        checked={appearanceData.theme === 'light'}
                                                        onChange={(e) => {
                                                            handleAppearanceChange(e);
                                                            document.documentElement.classList.remove('dark');
                                                        }}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="text-gray-700">Light</span>
                                                </label>
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="theme"
                                                        value="dark"
                                                        checked={appearanceData.theme === 'dark'}
                                                        onChange={(e) => {
                                                            handleAppearanceChange(e);
                                                            document.documentElement.classList.add('dark');
                                                        }}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="text-gray-700">Dark</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Color Scheme Dropdown */}
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800 mb-3">Color Scheme</h3>
                                            <select
                                                name="colorScheme"
                                                value={appearanceData.colorScheme}
                                                onChange={(e) => {
                                                    handleAppearanceChange(e);
                                                    // Remove all color classes first
                                                    document.documentElement.classList.remove(
                                                        'theme-blue', 'theme-green', 'theme-purple', 'theme-red'
                                                    );
                                                    // Add the selected color class
                                                    document.documentElement.classList.add(`theme-${e.target.value}`);
                                                }}
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                            >
                                                <option value="blue">Blue (Default)</option>
                                                <option value="green">Green</option>
                                                <option value="purple">Purple</option>
                                                <option value="red">Red</option>
                                            </select>
                                        </div>

                                        {/* Compact Mode - Toggle on right side */}
                                        <div className="flex items-center justify-between pt-2">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-800">Compact Mode</h3>
                                                <p className="text-sm text-gray-500">Show more content with less spacing</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    id="compactMode"
                                                    name="compactMode"
                                                    checked={appearanceData.compactMode}
                                                    onChange={(e) => {
                                                        handleAppearanceChange(e);
                                                        if (e.target.checked) {
                                                            document.documentElement.classList.add('compact-mode');
                                                        } else {
                                                            document.documentElement.classList.remove('compact-mode');
                                                        }
                                                    }}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Preferences
                                </button>
                            </form>
                        )}

                        {activeTab === 'working-hours' && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Working Hours</h2>
                                    <p className="text-gray-600 mb-6">Set your regular working hours and availability</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {workingHours.map((day, index) => (
                                                    <tr key={day.day}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{day.day}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <label className="relative inline-flex items-center cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={day.working}
                                                                    onChange={() => handleWorkingHoursChange(index, 'working', !day.working)}
                                                                    className="sr-only peer"
                                                                />
                                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                                <span className="ml-3 text-sm font-medium text-gray-700">
                                                                    {day.working ? 'Working' : 'Off'}
                                                                </span>
                                                            </label>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {day.working ? (
                                                                <select
                                                                    value={day.start}
                                                                    onChange={(e) => handleWorkingHoursChange(index, 'start', e.target.value)}
                                                                    className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                                >
                                                                    {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM'].map(time => (
                                                                        <option key={time} value={time}>{time}</option>
                                                                    ))}
                                                                </select>
                                                            ) : (
                                                                <span className="text-gray-400">-</span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {day.working ? (
                                                                <select
                                                                    value={day.end}
                                                                    onChange={(e) => handleWorkingHoursChange(index, 'end', e.target.value)}
                                                                    className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                                >
                                                                    {['02:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map(time => (
                                                                        <option key={time} value={time}>{time}</option>
                                                                    ))}
                                                                </select>
                                                            ) : (
                                                                <span className="text-gray-400">-</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="border-t pt-6 mt-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-4">Appointment Settings</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 mb-2">Default Appointment Duration</label>
                                                <select
                                                    name="defaultDuration"
                                                    value={appointmentSettings.defaultDuration}
                                                    onChange={handleAppointmentSettingsChange}
                                                    className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                >
                                                    <option value="15">15 minutes</option>
                                                    <option value="30">30 minutes</option>
                                                    <option value="45">45 minutes</option>
                                                    <option value="60">60 minutes</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">Buffer Time Between Appointments</label>
                                                <select
                                                    name="bufferTime"
                                                    value={appointmentSettings.bufferTime}
                                                    onChange={handleAppointmentSettingsChange}
                                                    className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                >
                                                    <option value="5">5 minutes</option>
                                                    <option value="10">10 minutes</option>
                                                    <option value="15">15 minutes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Schedule
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;