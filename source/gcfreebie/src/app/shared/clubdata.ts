export interface IClubData
{

    ClubName: string;
    ClubType: string;
    DisplayName: string;
    Tour: number;
    ClubRarity: string;

}

export interface IClubDetail
{
    
    ClubName: string;
    Level: number;
    Power: number;
    Accuracy: number;
    TopSpin: number;
    BackSpin: number;
    Curl: number;
    BallGuide: number;
    Distance: number;
    DistanceTS: number;

}

export interface IClubType
{
    ClubType: string;
    DisplayName: string;

}

export interface IClubDisp
{
    ClubName: string;
    DisplayName: string;

}