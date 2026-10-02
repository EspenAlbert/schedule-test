# config/team/TestAccConfigDSTeamByName_basic Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.02s
[2026-09-11 00:45](#error-2026-09-11t0045530000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.01s
[2026-09-11 06:44](#error-2026-09-11t0644330000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 3.05s
[2026-09-12 00:44](#error-2026-09-12t0044110000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.04s
[2026-09-14 00:49](#error-2026-09-14t0049310000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.05s
[2026-09-15 00:46](#error-2026-09-15t0046470000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.02s
[2026-09-16 00:45](#error-2026-09-16t0045240000) | CheckFailure for team.test2 at Step: 1 Checks: 4 | dev | 2.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03 PASS 4 seconds
- 2026-09-04 PASS 4 seconds
- 2026-09-05 PASS 4 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 6 seconds
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

- 2026-09-15

### Error 2026-09-15T00:46:47+00:00
```
2026-09-15T00:46:47.8321106Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-15T00:46:47.8328024Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-15T00:46:47.8331400Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-15T00:46:47.8332265Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-15T00:46:47.8340445Z    test_terraform_path=/home/runner/work/_temp/cf873c6b-5627-4123-b147-3b7d253532e1/terraform test_working_directory=/tmp/plugintest1138229768 test_step_number=1
2026-09-15T00:46:47.8373110Z --- FAIL: TestAccConfigDSTeamByName_basic (2.22s)
```

- 2026-09-16

### Error 2026-09-16T00:45:24+00:00
```
2026-09-16T00:45:24.9921349Z === RUN   TestAccConfigDSTeamByName_basic
2026-09-16T00:45:24.9967234Z === CONT  TestAccConfigDSTeamByName_basic
2026-09-16T00:45:24.9974151Z    test_terraform_path=/home/runner/work/_temp/db5a7e6d-3809-4ae6-84ba-37cb517b476d/terraform
2026-09-16T00:45:24.9983881Z === NAME  TestAccConfigDSTeamByName_basic
2026-09-16T00:45:24.9984750Z     data_source_team_test.go:51: Step 1/1 error: Check failed: Check 4/4 error: data.mongodbatlas_team.test2: Attribute 'usernames.#' expected "1", got "0"
2026-09-16T00:45:24.9985473Z --- FAIL: TestAccConfigDSTeamByName_basic (2.49s)
```

- 2026-09-17 PASS 3 seconds
- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 5 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 8 seconds
- 2026-09-22 PASS 4 seconds
- 2026-09-23 PASS 4 seconds
- 2026-09-24 PASS 4 seconds
- 2026-09-25 PASS 4 seconds
- 2026-09-26 PASS 4 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 5 seconds
- 2026-09-29
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 3 seconds
- 2026-09-30 PASS 6 seconds
- 2026-10-01 PASS 4 seconds
- 2026-10-02 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 5 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 4 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 4 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 8 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 3 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
