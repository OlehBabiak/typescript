// Enum  - структурує код, якщо є однотипні елементи
enum MemberShip {
    Simple,
    Standart,
    Premium
}
const membership = MemberShip.Standart
const membershipReverse = MemberShip[2]
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VKONTAKTE',
    FB = "FACEBOOK",
    IM = 'INSTAGRAM'
}
const social = SocialMedia.IM
console.log(social)