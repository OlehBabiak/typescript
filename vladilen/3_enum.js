// Enum  - структурує код, якщо є однотипні елементи
var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standart"] = 1] = "Standart";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var membership = MemberShip.Standart;
var membershipReverse = MemberShip[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia[SocialMedia["VK"] = 0] = "VK";
    SocialMedia[SocialMedia["VKOTAKTE"] = 1] = "VKOTAKTE";
    SocialMedia["FB"] = "FACEBOOK";
    SocialMedia["IM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.IM;
console.log(social);
