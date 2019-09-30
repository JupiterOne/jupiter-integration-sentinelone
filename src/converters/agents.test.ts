import { createAgentEntities } from "./agents";

test("convert agent entity", () => {
  const agents = [
    {
      domain: "mybusiness.net",
      appsVulnerabilityStatus: "up_to_date",
      siteName: "225494730938493804",
      coreCount: 8,
      totalMemory: 8192,
      inRemoteShellSession: true,
      osArch: "32 bit",
      allowRemoteShell: true,
      scanStatus: "started",
      consoleMigrationStatus: "Failed",
      updatedAt: "2018-02-27T04:49:26.257525Z",
      osType: "windows",
      userActionsNeeded: ["user_action_needed"],
      id: "225494730938493804",
      createdAt: "2018-02-27T04:49:26.257525Z",
      networkInterfaces: [
        {
          inet: ["192.168.0.1", "192.168.0.2"],
          physical: "00:25:96:FF:FE:12:34:56",
          id: "225494730938493804",
          name: "string",
          inet6: ["2001:db8:a0b:12f0::1", "2001:db8:a0b:12f0::2"],
        },
      ],
      externalIp: "31.155.5.7",
      computerName: "JOHN-WIN-4125",
      modelName: "Acme computers - 15x4k",
      uuid: "ff819e70af13be381993075eb0ce5f2f6de05be2",
      encryptedApplications: true,
      activeDirectory: {
        computerDistinguishedName:
          "CN=TEMP-T470P,CN=Computers,DC=sentinelone,DC=com",
        lastUserMemberOf: [
          "CN=Users,DC=sentinelone,DC=com",
          "CN=Managers,CN=Users,DC=sentinelone,DC=com",
        ],
        computerMemberOf: [
          "CN=Computers,DC=sentinelone,DC=com",
          "CN=Servers,CN=Computers,DC=sentinelone,DC=com",
        ],
        lastUserDistinguishedName: "CN=John Doe,CN=Users,DC=sentinelone,DC=com",
      },
      osUsername: "string",
      groupName: "string",
      infected: true,
      policyUpdatedAt: "2018-02-27T04:49:26.257525Z",
      cpuId: "Acme chips inc. Pro5555 @ 3.33GHz",
      registeredAt: "2018-02-27T04:49:26.257525Z",
      activeThreats: 3,
      groupUpdatedAt: "2018-02-27T04:49:26.257525Z",
      machineType: "unknown",
      groupIp: "31.155.5.x",
      osStartTime: "2018-02-27T04:49:26.257525Z",
      osRevision: "string",
      scanAbortedAt: "2018-02-27T04:49:26.257525Z",
      siteId: "225494730938493804",
      scanStartedAt: "2018-02-27T04:49:26.257525Z",
      isPendingUninstall: true,
      scanFinishedAt: "2018-02-27T04:49:26.257525Z",
      lastActiveDate: "2018-02-27T04:49:26.257525Z",
      groupId: "225494730938493804",
      isActive: true,
      agentVersion: "2.5.0.2417",
      licenseKey: "string",
      networkStatus: "connected",
      lastLoggedInUserName: "janedoe3",
      osName: "Windows 10",
      mitigationMode: "protect",
      cpuCount: 2,
      isUninstalled: true,
      isUpToDate: true,
      mitigationModeSuspicious: "protect",
      isDecommissioned: true,
    },
  ];
  expect(createAgentEntities(agents)).toEqual([
    {
      _class: "HostAgent",
      _key: "sentinelone_agent-id-225494730938493804",
      _type: "sentinelone_agent",
      activeThreats: 3,
      agentVersion: "2.5.0.2417",
      allowRemoteShell: true,
      appsVulnerabilityStatus: "up_to_date",
      computerName: "JOHN-WIN-4125",
      consoleMigrationStatus: "Failed",
      coreCount: 8,
      cpuCount: 2,
      cpuId: "Acme chips inc. Pro5555 @ 3.33GHz",
      createdAt: 1519706966257,
      displayName: "JOHN-WIN-4125",
      domain: "mybusiness.net",
      encryptedApplications: true,
      externalIp: "31.155.5.7",
      groupId: "225494730938493804",
      groupIp: "31.155.5.x",
      groupName: "string",
      groupUpdatedAt: 1519706966257,
      id: "225494730938493804",
      inRemoteShellSession: true,
      infected: true,
      isActive: true,
      isDecommissioned: true,
      isPendingUninstall: true,
      isUninstalled: true,
      isUpToDate: true,
      lastActiveDate: 1519706966257,
      lastLoggedInUserName: "janedoe3",
      licenseKey: "string",
      machineType: "unknown",
      mitigationMode: "protect",
      mitigationModeSuspicious: "protect",
      modelName: "Acme computers - 15x4k",
      networkStatus: "connected",
      osArch: "32 bit",
      osName: "Windows 10",
      osRevision: "string",
      osStartTime: 1519706966257,
      osType: "windows",
      osUsername: "string",
      policyUpdatedAt: 1519706966257,
      registeredAt: 1519706966257,
      scanAbortedAt: 1519706966257,
      scanFinishedAt: 1519706966257,
      scanStartedAt: 1519706966257,
      scanStatus: "started",
      siteId: "225494730938493804",
      siteName: "225494730938493804",
      totalMemory: 8192,
      updatedAt: 1519706966257,
      uuid: "ff819e70af13be381993075eb0ce5f2f6de05be2",
    },
  ]);
});