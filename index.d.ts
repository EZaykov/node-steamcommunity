/** Declaration file generated by dts-gen-wtf */
import { EventEmitter } from 'events';

export = steamcommunity;

declare class steamcommunity extends EventEmitter {
    constructor(options?: any);

    acceptAllConfirmations(time: any, confKey: any, allowKey: any, callback: any): any;

    acceptConfirmationForObject(identitySecret: any, objectID: any, callback: any): any;

    acceptFriendRequest(userID: any, callback: any): void;

    addFriend(userID: any, callback: any): void;

    blockCommunication(userID: any, callback: any): void;

    changeTradeURL(callback: any): void;

    chatLogoff(): void;

    chatLogon(interval: any, uiMode: any): void;

    chatMessage(recipient: any, text: any, type: any, callback: any): void;

    checkConfirmations(): any;

    deleteGroupAnnouncement(gid: any, aid: any, callback: any): void;

    deleteGroupComment(gid: any, cid: any, callback: any): void;

    deleteGroupEvent(gid: any, id: any, callback: any): void;

    deleteProfileStatus(postID: any, callback: any): void;

    disableTwoFactor(revocationCode: any, callback: any): void;

    editGroupAnnouncement(gid: any, aid: any, headline: any, content: any, callback: any): void;

    editGroupEvent(gid: any, id: any, name: any, type: any, description: any, time: any, server: any, callback: any): void;

    editProfile(settings: any, callback: any): void;

    enableTwoFactor(callback: any): void;

    finalizeTwoFactor(secret: any, activationCode: any, callback: any): void;

    getAllGroupAnnouncements(gid: any, time: any, callback: any): any;

    getAllGroupComments(gid: any, from: any, count: any, callback: any): void;

    getClientLogonToken(callback: any): void;

    getConfirmationOfferID(confID: any, time: any, key: any, callback: any): void;

    getConfirmations(time: any, key: any, callback: any): void;

    getGemValue(appid: any, assetid: any, callback: any): void;

    getGiftDetails(giftID: any, callback: any): void;

    getGroupHistory(gid: any, page: any, callback: any): void;

    getGroupJoinRequests(gid: any, callback: any): void;

    getGroupMembers(gid: any, callback: any, members: any, link: any, addresses: any, addressIdx: any): any;

    getGroupMembersEx(gid: any, addresses: any, callback: any): void;

    getInventoryHistory(options: any, callback: any): void;

    getMarketApps(callback: any): void;

    getMarketItem(appid: any, hashName: any, currency: any, callback: any): void;

    getNotifications(callback: any): void;

    getSessionID(): any;

    getSteamGroup(id: any, callback: any): void;

    getSteamUser(id: any, callback: any): void;

    getTradeURL(callback: any): void;

    getUserAliases(userID: any, callback: any): any;

    getUserInventory(userID: any, appID: any, contextID: any, tradableOnly: any, callback: any): void;

    getUserInventoryContents(userID: any, appID: any, contextID: any, tradableOnly: any, language: any, callback: any): any;

    getUserInventoryContexts(userID: any, callback: any): void;

    getUserProfileBackground(userID: any, callback: any): void;

    getWebApiKey(domain: any, callback: any): any;

    getWebApiOauthToken(callback: any): any;

    httpRequest(uri: any, options: any, callback: any, source: any, ...args: any[]): void;

    httpRequestGet(...args: any[]): any;

    httpRequestPost(...args: any[]): any;

    inviteUserToGroup(userID: any, groupID: any, callback: any): void;

    joinGroup(gid: any, callback: any): void;

    kickGroupMember(gid: any, steamID: any, callback: any): void;

    leaveGroup(gid: any, callback: any): void;

    loggedIn(callback: any): void;

    login(details: any, callback: any): any;

    marketSearch(options: any, callback: any): void;

    oAuthLogin(steamguard: any, token: any, callback: any): void;

    parentalUnlock(pin: any, callback: any): void;

    postGroupAnnouncement(gid: any, headline: any, content: any, callback: any): void;

    postGroupComment(gid: any, message: any, callback: any): void;

    postProfileStatus(statusText: any, options: any, callback: any): void;

    postUserComment(userID: any, message: any, callback: any): void;

    profileSettings(settings: any, callback: any): void;

    redeemGift(giftID: any, callback: any): void;

    removeFriend(userID: any, callback: any): void;

    resetItemNotifications(callback: any): void;

    respondToAllGroupJoinRequests(gid: any, approve: any, callback: any): void;

    respondToConfirmation(confID: any, confKey: any, time: any, key: any, accept: any, callback: any): void;

    respondToGroupJoinRequests(gid: any, steamIDs: any, approve: any, callback: any): void;

    scheduleGroupEvent(gid: any, name: any, type: any, description: any, time: any, server: any, callback: any): void;

    setCookies(cookies: any): void;

    setGroupPlayerOfTheWeek(gid: any, steamID: any, callback: any): void;

    setupProfile(callback: any): void;

    startConfirmationChecker(pollInterval: any, identitySecret: any): void;

    stopConfirmationChecker(): void;

    turnItemIntoGems(appid: any, assetid: any, expectedGemsValue: any, callback: any): void;

    unblockCommunication(userID: any, callback: any): void;

    uploadAvatar(image: any, format: any, callback: any): void;

    static ChatState: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        LogOnFailed: number;
        LoggedOn: number;
        LoggingOn: number;
        Offline: number;
    };

    static ConfirmationType: {
        "2": string;
        "3": string;
        MarketListing: number;
        Trade: number;
    };

    static EResult: {
        "0": string;
        "1": string;
        "10": string;
        "100": string;
        "101": string;
        "102": string;
        "103": string;
        "104": string;
        "105": string;
        "106": string;
        "107": string;
        "108": string;
        "109": string;
        "11": string;
        "110": string;
        "111": string;
        "112": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "2": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "3": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
        "41": string;
        "42": string;
        "43": string;
        "44": string;
        "45": string;
        "46": string;
        "47": string;
        "48": string;
        "49": string;
        "5": string;
        "50": string;
        "51": string;
        "52": string;
        "53": string;
        "54": string;
        "55": string;
        "56": string;
        "57": string;
        "58": string;
        "59": string;
        "6": string;
        "60": string;
        "61": string;
        "62": string;
        "63": string;
        "64": string;
        "65": string;
        "66": string;
        "67": string;
        "68": string;
        "69": string;
        "7": string;
        "70": string;
        "71": string;
        "72": string;
        "73": string;
        "74": string;
        "75": string;
        "76": string;
        "77": string;
        "78": string;
        "79": string;
        "8": string;
        "80": string;
        "81": string;
        "82": string;
        "83": string;
        "84": string;
        "85": string;
        "86": string;
        "87": string;
        "88": string;
        "89": string;
        "9": string;
        "90": string;
        "91": string;
        "92": string;
        "93": string;
        "94": string;
        "95": string;
        "96": string;
        "97": string;
        "98": string;
        "99": string;
        AccessDenied: number;
        AccountActivityLimitExceeded: number;
        AccountAssociatedToMultiplePartners: number;
        AccountAssociatedToMultiplePlayers: number;
        AccountDisabled: number;
        AccountLimitExceeded: number;
        AccountLocked: number;
        AccountLockedDown: number;
        AccountLoginDeniedNeedTwoFactor: number;
        AccountLoginDeniedThrottle: number;
        AccountLogonDenied: number;
        AccountLogonDeniedNeedTwoFactorCode: number;
        AccountLogonDeniedNoMail: number;
        AccountLogonDeniedNoMailSent: number;
        AccountLogonDeniedVerifiedEmailRequired: number;
        AccountNotFeatured: number;
        AccountNotFound: number;
        AccountNotFriends: number;
        AdministratorOK: number;
        AlreadyLoggedInElsewhere: number;
        AlreadyOwned: number;
        AlreadyRedeemed: number;
        BadResponse: number;
        Banned: number;
        Blocked: number;
        Busy: number;
        Cancelled: number;
        CannotUseOldPassword: number;
        ConnectFailed: number;
        ContentVersion: number;
        DataCorruption: number;
        Disabled: number;
        DiskFull: number;
        DuplicateName: number;
        DuplicateRequest: number;
        EmailSendFailure: number;
        EncryptionFailure: number;
        Expired: number;
        ExpiredLoginAuthCode: number;
        ExternalAccountAlreadyLinked: number;
        ExternalAccountUnlinked: number;
        FacebookQueryError: number;
        Fail: number;
        FileNotFound: number;
        GSLTDenied: number;
        GSLTExpired: number;
        GSOwnerDenied: number;
        HandshakeFailed: number;
        HardwareNotCapableOfIPT: number;
        IOFailure: number;
        IPBanned: number;
        IPLoginRestrictionFailed: number;
        IPNotFound: number;
        IPTInitError: number;
        Ignored: number;
        IllegalPassword: number;
        InsufficientFunds: number;
        InsufficientPrivilege: number;
        Invalid: number;
        InvalidCEGSubmission: number;
        InvalidEmail: number;
        InvalidItemType: number;
        InvalidLoginAuthCode: number;
        InvalidName: number;
        InvalidParam: number;
        InvalidPassword: number;
        InvalidProtocolVer: number;
        InvalidState: number;
        InvalidSteamID: number;
        ItemDeleted: number;
        ItemOrEntryHasBeenDeleted: number;
        LimitExceeded: number;
        LimitedUserAccount: number;
        LockingFailed: number;
        LoggedInElsewhere: number;
        LogonSessionReplaced: number;
        NeedCaptcha: number;
        NoConnection: number;
        NoMatch: number;
        NoMatchingURL: number;
        NoMobileDevice: number;
        NoMobileDeviceAvailable: number;
        NoSiteLicensesFound: number;
        NotLoggedOn: number;
        NotModified: number;
        NotSettled: number;
        OK: number;
        PSNTicketInvalid: number;
        ParentalControlRestricted: number;
        PasswordNotSet: number;
        PasswordRequiredToKickSession: number;
        PasswordUnset: number;
        Pending: number;
        PersistFailed: number;
        PhoneActivityLimitExceeded: number;
        RateLimitExceeded: number;
        RefundToWallet: number;
        RegionLocked: number;
        RemoteCallFailed: number;
        RemoteDisconnect: number;
        RemoteFileConflict: number;
        RequirePasswordReEntry: number;
        RestrictedDevice: number;
        Revoked: number;
        SMSCodeFailed: number;
        SameAsPreviousValue: number;
        ServiceReadOnly: number;
        ServiceUnavailable: number;
        ShoppingCartNotFound: number;
        Suspended: number;
        TimeIsOutOfSync: number;
        TimeNotSynced: number;
        Timeout: number;
        TooManyAccountsAccessThisResource: number;
        TooManyPending: number;
        TryAnotherCM: number;
        TwoFactorActivationCodeMismatch: number;
        TwoFactorCodeMismatch: number;
        UnexpectedError: number;
        ValueOutOfRange: number;
        WGNetworkSendExceeded: number;
    };

    static PersonaState: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        Away: number;
        Busy: number;
        LookingToPlay: number;
        LookingToTrade: number;
        Max: number;
        Offline: number;
        Online: number;
        Snooze: number;
    };

    static PersonaStateFlag: {
        "1": string;
        "1024": string;
        "2": string;
        "2048": string;
        "256": string;
        "4": string;
        "4096": string;
        "512": string;
        ClientTypeMobile: number;
        ClientTypeTenfoot: number;
        ClientTypeVR: number;
        ClientTypeWeb: number;
        Golden: number;
        HasRichPresence: number;
        InJoinableGame: number;
        LaunchTypeGamepad: number;
        OnlineUsingBigPicture: number;
        OnlineUsingMobile: number;
        OnlineUsingVR: number;
        OnlineUsingWeb: number;
    };

    static PrivacyState: {
        FriendsOnly: number;
        Private: number;
        Public: number;
    };

}

declare namespace steamcommunity {
    class SteamID {
        constructor(input: any);

        getSteam2RenderedID(newerFormat: any): any;

        getSteam3RenderedID(): any;

        getSteamID64(): any;

        isGroupChat(): any;

        isLobby(): any;

        isValid(): any;

        steam2(newerFormat: any): any;

        steam3(): any;

        toString(): any;

        static AccountIDMask: number;

        static AccountInstanceMask: number;

        static ChatInstanceFlags: {
            Clan: number;
            Lobby: number;
            MMSLobby: number;
        };

        static Instance: {
            ALL: number;
            CONSOLE: number;
            DESKTOP: number;
            WEB: number;
        };

        static Type: {
            ANON_GAMESERVER: number;
            ANON_USER: number;
            CHAT: number;
            CLAN: number;
            CONTENT_SERVER: number;
            GAMESERVER: number;
            INDIVIDUAL: number;
            INVALID: number;
            MULTISEAT: number;
            P2P_SUPER_SEEDER: number;
            PENDING: number;
        };

        static TypeChars: {
            "0": string;
            "1": string;
            "10": string;
            "2": string;
            "3": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
        };

        static Universe: {
            BETA: number;
            DEV: number;
            INTERNAL: number;
            INVALID: number;
            PUBLIC: number;
        };

        static fromIndividualAccountID(accountid: any): any;

    }

}