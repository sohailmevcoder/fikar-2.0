import { useState, useEffect } from 'react';

const NotificationPage = () => {
  const [allNotifications, setAllNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState({
    // Delivery methods
    email: true,
    sms: true,
    push: true,
    // Only these 4 notification types will be shown
    appointment: true,
    message: true,
    emergency: true,
    scheduleChange: true,
    // Other types are set to false and won't be shown
    prescription: false,
    labResult: false,
    billing: false,
    patientRequest: false,
    systemAlert: false,
    referral: false,
    followUp: false,
    insurance: false
  });

  // Notification icons and colors mapping (only keeping relevant ones)
  const notificationTypes = {
    appointment: {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600'
    },
    message: {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600'
    },
    emergency: {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'bg-red-100 text-red-600'
    },
    scheduleChange: {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: 'bg-pink-100 text-pink-600'
    }
  };

  // Filter notifications based on preferences
  const filterNotifications = () => {
    const filtered = allNotifications.filter(notification => {
      return preferences[notification.type];
    });
    setFilteredNotifications(filtered);
  };

  // Mock data fetch with only the 4 required notification types
  useEffect(() => {
    const fetchNotifications = () => {
      setTimeout(() => {
        const mockNotifications = [
          {
            id: 1,
            type: 'appointment',
            title: 'New Appointment Request',
            message: 'Patient: Rahul Sharma, Tomorrow 10:00 AM',
            time: '10 mins ago',
            read: false
          },
          {
            id: 2,
            type: 'message',
            title: 'New Message',
            message: 'From: Dr. Anjali Patel regarding case #4567',
            time: '25 mins ago',
            read: true
          },
          {
            id: 3,
            type: 'emergency',
            title: 'Emergency Alert',
            message: 'Patient Admitted: ICU Bed 3, Critical Condition',
            time: 'Yesterday',
            read: true
          },
          {
            id: 4,
            type: 'scheduleChange',
            title: 'Schedule Update',
            message: 'OR 2 maintenance scheduled for tomorrow 2-4 PM',
            time: '1 day ago',
            read: false
          },
          {
            id: 5,
            type: 'appointment',
            title: 'Appointment Reminder',
            message: 'Your appointment with Dr. Smith is in 1 hour',
            time: '30 mins ago',
            read: false
          },
          {
            id: 6,
            type: 'message',
            title: 'New Message',
            message: 'From: Nurse Johnson about your recent visit',
            time: '2 hours ago',
            read: false
          },
          {
            id: 7,
            type: 'emergency',
            title: 'Emergency Alert',
            message: 'Code Blue in Ward 4',
            time: '15 mins ago',
            read: false
          },
          {
            id: 8,
            type: 'scheduleChange',
            title: 'Clinic Hours Change',
            message: 'Friday clinic will close at 3PM this week',
            time: '2 days ago',
            read: true
          },
          {
            id: 9,
            type: 'appointment',
            title: 'Appointment Confirmation',
            message: 'Your appointment for next Monday has been confirmed',
            time: '3 days ago',
            read: true
          },
          {
            id: 10,
            type: 'message',
            title: 'New Message',
            message: 'From: Billing Department about your invoice',
            time: '4 days ago',
            read: true
          }
        ];
        setAllNotifications(mockNotifications);
        setLoading(false);
      }, 800);
    };

    fetchNotifications();
  }, []);

  // Apply filtering whenever preferences or notifications change
  useEffect(() => {
    filterNotifications();
  }, [allNotifications, preferences]);

  const markAsRead = (id) => {
    const updated = allNotifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    setAllNotifications(updated);
  };

  const markAllAsRead = () => {
    const updated = allNotifications.map(notification => ({
      ...notification,
      read: true
    }));
    setAllNotifications(updated);
  };

  const deleteNotification = (id) => {
    const updated = allNotifications.filter(notification => notification.id !== id);
    setAllNotifications(updated);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  const savePreferences = () => {
    // First apply the filtering
    filterNotifications();
    // Then show the success message
    alert('Notification preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Notification List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Your Notifications
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({filteredNotifications.length} {filteredNotifications.length === 1 ? 'notification' : 'notifications'})
                  </span>
                </h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={markAllAsRead}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Mark all as read
                  </button>
                </div>
              </div>
              
              {loading ? (
                <div className="p-8 flex justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No notifications matching your current preferences
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {filteredNotifications.map((notification) => (
                    <li 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center 
                            ${notificationTypes[notification.type].color}`}
                          >
                            {notificationTypes[notification.type].icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-blue-600 hover:text-blue-800"
                            >
                              Mark read
                            </button>
                          )}
                          <button 
                            onClick={() => deleteNotification(notification.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Notification Preferences</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Toggle to filter which notifications you see
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-md font-medium text-gray-800 mb-3">Delivery Methods</h3>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="email"
                      checked={preferences.email}
                      onChange={handlePreferenceChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Email Notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="sms"
                      checked={preferences.sms}
                      onChange={handlePreferenceChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">SMS Notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="push"
                      checked={preferences.push}
                      onChange={handlePreferenceChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Push Notifications</span>
                  </label>
                </div>

                <h3 className="text-md font-medium text-gray-800 mb-3">Notification Types</h3>
                <div className="space-y-3">
                  {Object.entries({
                    appointment: 'Appointment Reminders',
                    message: 'New Messages',
                    emergency: 'Emergency Alerts',
                    scheduleChange: 'Schedule Changes'
                  }).map(([type, label]) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        name={type}
                        checked={preferences[type]}
                        onChange={handlePreferenceChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={savePreferences}
                  className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;