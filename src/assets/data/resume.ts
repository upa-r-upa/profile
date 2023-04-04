export interface ResumeProject {
  title: string;
  description: string;
  period: [Date, Date];
  libraries: Array<string>;
  tasks: Array<string>;
}

export interface Resume {
  team: string;
  period: [Date, Date];
  projects: Array<ResumeProject>;
}

const ResumeList: Array<Resume> = [
  {
    team: 'Spoqa',
    period: [new Date(2022, 10), new Date(2023, 1)],
    projects: [],
  },
  {
    team: 'Famoz',
    period: [new Date(2019, 1), new Date(2022, 5)],
    projects: [
      {
        title: 'DL 건설 e편한세상 리뉴얼 웹 개발',
        description: 'e편한세상 웹 페이지의 리뉴얼 개발 프로젝트',
        period: [new Date(2022, 0), new Date(2022, 5)],
        libraries: ['React', 'Typescript', 'Mobx', 'gsap', 'styled-components'],
        tasks: [
          '웹 성능 최적화로 속도 약 10% 향상 (Google lighthouse 기준)',
          '퍼블리싱 진행 된 프로젝트의 API 연동 및 기능 개발 위주 진행',
          '반복되는 작업의 스크립트 작성을 통한 자동화',
          '폴더 구조 수정 및 이름, 참조 수정 등의 자동화 스크립트 작성 (작업 기간 50% 단축)',
          '200개 이상의 파일 특정 내용 작성 자동화 스크립트 작성',
        ],
      },
      {
        title: '서버리스 솔루션 서비스 웹 2차 개발 (MVP)',
        description: '자사 신규 서버리스 솔루션 서비스 MVP 웹 개발 프로젝트 (2차)',
        period: [new Date(2021, 6), new Date(2022, 5)],
        libraries: ['React', 'Typescript', 'Electron', 'Mobx', 'Fabric.js', 'Antd'],
        tasks: [
          '사용자의 수정이 잦은 계층 구조(트리 데이터) 데이터 조회/수정 기능 제작',
          'API 기반의 Fabric.js Canvas UI 관리 기능 제작',
        ],
      },
      {
        title: 'Koelnmesse wayfinding 서비스 웹 추가 기능 개발',
        description: '독일 Koelnmesse 국제 무역 박람회 길 안내 서비스 웹',
        period: [new Date(2021, 2), new Date(2021, 7)],
        libraries: ['React', 'Typescript', 'Redux-observable', 'RxJS', 'React-Konva'],
        tasks: [
          '반응형 웹을 위한 폴더 구조 설계 및 템플릿 제작으로 개발 생산성 향상',
          '기존 6할 이상 제작되었던 반응형 웹의 개발 구조를 점진적으로 개선하여 10할까지 구현',
          '기개발된 프로젝트의 PWA 작업과 버그 수정 및 일부 기능 추가 개발',
          'Lazy import 기능을 통한 code splitting 및 이미지 캐싱 등을 통한 최적화',
        ],
      },
      {
        title: '서버리스 솔루션 서비스 웹 1차 개발',
        description: '자사 신규 서버리스 솔루션 서비스 웹',
        period: [new Date(2021, 0), new Date(2021, 9)],
        libraries: ['React', 'Typescript', 'Redux-observable', 'RxJS', 'styled-components'],
        tasks: [
          'Git convention/branch 관리 전략 성립 및 Issue/PR template을 활용한 소스 관리 도입',
          'Github Action을 통한 CI 제작으로 개발 생산성 향상',
          '재사용 가능한 공통 UI 컴포넌트(Popover, Select, Modal 등) 구현',
          '트리 데이터의 관리(수정/추가/삭제) 및 재귀 방식을 통한 렌더링 구현',
        ],
      },
    ],
  },
  {
    team: 'Wier',
    period: [new Date(2019, 5), new Date(2021, 9)],
    projects: [
      {
        title: '게임 데이터 분석 커뮤니티',
        description: '채팅 기능, 게시판 등을 갖춘 게임 데이터 분석 커뮤니티 웹',
        period: [new Date(2020, 7), new Date(2021, 9)],
        libraries: ['React', 'Next.js', 'Typescript', 'Redux-thunk', 'styled-components'],
        tasks: [
          'Next.js를 사용한 SSR 페이지 제작으로 SEO 진행',
          '게임 통계 페이지, 마이페이지 등의 전반적인 프론트 구현 및 반응형 작업 (채팅 제외)',
          '런칭 이후 피드백을 통한 점진적인 웹 개선',
        ],
      },
      {
        title: '브랜드 매장 관리 애플리케이션',
        description: '상품 결제와 매장 제품 관리를 도와주는 AI 시스템 Hybrid App',
        period: [new Date(2019, 5), new Date(2019, 7)],
        libraries: ['Ionic', 'Angular', 'Canvas', 'SCSS'],
        tasks: [
          '기개발된 Ionic app의 기능 추가 작업 진행',
          'Canvas를 활용한 사진 속 특정 좌표의 컨텐츠 표기 기능 개발',
          '매장 내 상품의 결제 안내 페이지 및 상세 페이지 구현',
        ],
      },
    ],
  },
];

export default ResumeList;
