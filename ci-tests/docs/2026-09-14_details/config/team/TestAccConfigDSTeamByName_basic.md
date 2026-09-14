# config/team/TestAccConfigDSTeamByName_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.02s
[2026-09-11 00:45](#error-2026-09-11t0045530000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.01s
[2026-09-11 06:44](#error-2026-09-11t0644330000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.05s
[2026-09-12 00:44](#error-2026-09-12t0044110000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.04s
[2026-09-14 00:49](#error-2026-09-14t0049310000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.05s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 3 seconds
- 2026-09-09 PASS 5 seconds
- 2026-09-10
  - PASS 3 seconds
  - FAIL 3 seconds

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4546877Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-10T17:00:43.4618055Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-10T17:00:43.4644679Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-10T17:00:43.4646591Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-10T17:00:43.4647860Z --- FAIL: TestAccConfigDSTeamByName_basic (3.20s)
```

- 2026-09-11
  - FAIL 3 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7845833Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-11T00:45:53.7882351Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-11T00:45:53.7894976Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-11T00:45:53.7895621Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-11T00:45:53.7903741Z   
2026-09-11T00:45:53.7928190Z --- FAIL: TestAccConfigDSTeamByName_basic (3.13s)
```

  - FAIL 3 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8673167Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-11T06:44:33.8719485Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-11T06:44:33.8736537Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-11T06:44:33.8737423Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-11T06:44:33.8747603Z    test_working_directory=/tmp/plugintest68290485
2026-09-11T06:44:33.8778230Z --- FAIL: TestAccConfigDSTeamByName_basic (3.47s)
```

- 2026-09-12

### Error 2026-09-12T00:44:11+00:00
```
2026-09-12T00:44:11.6704727Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-12T00:44:11.6708641Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-12T00:44:11.6713983Z    test_name=TestAccConfigDSTeam_basic test_working_directory=/tmp/plugintest1622385712
2026-09-12T00:44:11.6721131Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-12T00:44:11.6721787Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-12T00:44:11.6736838Z    test_name=TestAccConfigRSTeam_updatingUsernames test_terraform_path=/home/runner/work/_temp/7070326b-f59e-43e9-9723-69b87cc10d36/terraform
2026-09-12T00:44:11.6761724Z --- FAIL: TestAccConfigDSTeamByName_basic (2.40s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3867098Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-14T00:49:31.3909608Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-14T00:49:31.3914902Z    test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform test_name=TestAccConfigDSTeam_basic test_working_directory=/tmp/plugintest4126409159
2026-09-14T00:49:31.3922217Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-14T00:49:31.3922911Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-14T00:49:31.3932478Z    test_terraform_path=/home/runner/work/_temp/5e50e1e6-3422-43c4-81e3-e7ff53c9a783/terraform test_working_directory=/tmp/plugintest4083881059 test_name=TestAccConfigRSTeam_basic test_step_number=1
2026-09-14T00:49:31.3960902Z --- FAIL: TestAccConfigDSTeamByName_basic (2.52s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
