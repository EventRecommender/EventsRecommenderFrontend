class StorageService
{
    // Get incoming activities
    getIncomingActivities()
    {
        let activities = JSON.parse(localStorage.getItem('incomingActivities'));
        if (activities == null) { return; }

        return activities;
    }

    getRecommendedActivities()
    {
        let activities = JSON.parse(localStorage.getItem('recommendations'));
        if (activities == null) { return; }

        return activities;
    }
}

export default new StorageService();