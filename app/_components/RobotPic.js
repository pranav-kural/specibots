import Image from "next/image";

export default function RobotPic() {
  return (
    <div className="robot-pic-fade-from-right">
      <div className="robot-pic-fade-from-top">
        <div className="robot-pic-fade-from-bottom">
          <Image
            src="/images/robot_notepad_in_hand.jpeg"
            height={250}
            width={250}
            alt="Robot with notepad in hand"
            className="robot-pic"
          />
        </div>
      </div>
    </div>
  );
}
