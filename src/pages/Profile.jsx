function Profile() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col justify-center p-8">
      {/* Profile Header */}
      <div className="text-start mb-16">
        <span className="block text-2xl font-bold text-gray-800 mb-2">
          안녕하세요
        </span>
        <span className="text-5xl font-semibold text-gray-700">
          프론트엔드 개발자, 송재우 입니다.
        </span>
      </div>

      {/* Profile Content */}
      <div className="flex items-center justify-center space-x-16">
        {/* Left: Profile Image */}
        <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Personal Information */}
        <div className="w-2/3 space-y-6 overflow-auto">
          <ul className="space-y-4 text-lg text-gray-600">
            <li>
              <strong>1995.04.23</strong>
            </li>
            <li className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="https://github.com/songjw3383"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/Github-Dark.svg"
                  alt="GitHub"
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/%EC%9E%AC%EC%9A%B0-%EC%86%A1-01334b296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/LinkedIn.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
            </li>
          </ul>

          <p className="leading-10">
            안녕하세요. 4년 차 프론트엔드 개발자 송재우입니다. 주력 기술
            스택으로는 Vue.js, React, 그리고 JavaScript를 활용하고 있습니다.
            <br />
            저는 사용자와 개발자 모두에게 더 나은 경험을 제공하기 위해 끊임없이
            고민하며 새로운 방식을 탐구하고 개선하는 것을 중요하게 생각합니다.
            <br />
            혼자만의 성장이 아닌, 다양한 개발 분야의 사람들과 협업하며 발전해
            나가고, 팀원들과 함께 더 나은 개발 문화를 만들어가는 데 열정을
            가지고 있습니다.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-3 mt-6">
        📌 경력 사항
      </h2>
      <div className="mt-8 overflow-auto h-[45vh]">
        <div className="space-y-6 border border-gray-300 p-4 rounded-lg">
          {/* 회사 1 */}
          <div className="p-6 border border-gray-200 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-700">크레스프리</h3>
            <p className="text-gray-600">2021.11. - 현재</p>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                <strong>웹 서비스 개발 및 유지보수</strong>
                <br />- 대시보드 및 관리 시스템 개발
                <br />- 실시간 데이터 시각화 및 모니터링 기능 제공
                <br />- IoT 센서 및 Edge 디바이스 활용한 실시간 데이터 수집 및
                분석 웹 서비스 개발
              </p>

              <p>
                <strong>디자이너 및 팀 협업</strong>
                <br />- Figma 및 Zeplin을 활용한 화면 설계 및 와이어프레임 작업
                <br />- Microsoft Teams 및 Slack을 이용한 원활한 커뮤니케이션과
                협업
              </p>

              <p>
                <strong>배포 및 인프라 관리</strong>
                <br />- Docker를 활용한 애플리케이션 배포 및 관리
              </p>
            </div>
          </div>
          <div className="p-6 border border-gray-200 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-700">크레스프리</h3>
            <p className="text-gray-600">2021.11. - 현재</p>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                <strong>웹 서비스 개발 및 유지보수</strong>
                <br />- 대시보드 및 관리 시스템 개발
                <br />- 실시간 데이터 시각화 및 모니터링 기능 제공
                <br />- IoT 센서 및 Edge 디바이스 활용한 실시간 데이터 수집 및
                분석 웹 서비스 개발
              </p>

              <p>
                <strong>디자이너 및 팀 협업</strong>
                <br />- Figma 및 Zeplin을 활용한 화면 설계 및 와이어프레임 작업
                <br />- Microsoft Teams 및 Slack을 이용한 원활한 커뮤니케이션과
                협업
              </p>

              <p>
                <strong>배포 및 인프라 관리</strong>
                <br />- Docker를 활용한 애플리케이션 배포 및 관리
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
