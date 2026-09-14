# config/team/TestAccConfigDSTeam_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 17:00](#error-2026-09-10t1700430000) | CheckFailure for team.test at Step: 1 Checks: 4,5,6,7,8,9 | dev | 3.01s
[2026-09-11 00:45](#error-2026-09-11t0045530000) | CheckFailure for team.test at Step: 1 Checks: 4,5,6,7,8,9 | dev | 3.00s
[2026-09-11 06:44](#error-2026-09-11t0644330000) | CheckFailure for team.test at Step: 1 Checks: 4,5,6,7,8,9 | dev | 3.05s
[2026-09-12 00:44](#error-2026-09-12t0044110000) | CheckFailure for team.test at Step: 1 Checks: 4,5,6,7,8,9 | dev | 2.03s
[2026-09-14 00:49](#error-2026-09-14t0049310000) | CheckFailure for team.test at Step: 1 Checks: 4,5,6,7,8,9 | dev | 2.04s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 3 seconds
- 2026-09-09 PASS 4 seconds
- 2026-09-10
  - PASS 4 seconds
  - FAIL 3 seconds

### Error 2026-09-10T17:00:43+00:00
```
2026-09-10T17:00:43.4545884Z === RUN   TestAccConfigDSTeam_basic
2026-09-10T17:00:43.4615935Z === CONT  TestAccConfigDSTeam_basic
2026-09-10T17:00:43.4630362Z === NAME  TestAccConfigDSTeam_basic
2026-09-10T17:00:43.4631685Z     data_source_team_test.go:20: Step 1/1 error: Check failed: Check 4/9 error: data.mongodbatlas_team.test: Attribute 'usernames.#' expected "1", got "0"
2026-09-10T17:00:43.4633414Z         Check 5/9 error: data.mongodbatlas_team.test: Attribute 'users.0.team_ids.0' expected to be set
2026-09-10T17:00:43.4635039Z         Check 6/9 error: data.mongodbatlas_team.test: Attribute 'users.0.roles.0.project_role_assignments.#' expected to be set
2026-09-10T17:00:43.4636685Z         Check 7/9 error: data.mongodbatlas_team.test: Attribute 'users.0.username' expected to be set
2026-09-10T17:00:43.4638078Z         Check 8/9 error: data.mongodbatlas_team.test: Attribute 'users.0.last_auth' expected to be set
2026-09-10T17:00:43.4639488Z         Check 9/9 error: data.mongodbatlas_team.test: Attribute 'users.0.created_at' expected to be set
2026-09-10T17:00:43.4647438Z --- FAIL: TestAccConfigDSTeam_basic (3.10s)
```

- 2026-09-11
  - FAIL 3 seconds

### Error 2026-09-11T00:45:53+00:00
```
2026-09-11T00:45:53.7845318Z === RUN   TestAccConfigDSTeam_basic
2026-09-11T00:45:53.7881279Z === CONT  TestAccConfigDSTeam_basic
2026-09-11T00:45:53.7888253Z === NAME  TestAccConfigDSTeam_basic
2026-09-11T00:45:53.7888881Z     data_source_team_test.go:20: Step 1/1 error: Check failed: Check 4/9 error: data.mongodbatlas_team.test: Attribute 'usernames.#' expected "1", got "0"
2026-09-11T00:45:53.7889646Z         Check 5/9 error: data.mongodbatlas_team.test: Attribute 'users.0.team_ids.0' expected to be set
2026-09-11T00:45:53.7890425Z         Check 6/9 error: data.mongodbatlas_team.test: Attribute 'users.0.roles.0.project_role_assignments.#' expected to be set
2026-09-11T00:45:53.7891136Z         Check 7/9 error: data.mongodbatlas_team.test: Attribute 'users.0.username' expected to be set
2026-09-11T00:45:53.7891775Z         Check 8/9 error: data.mongodbatlas_team.test: Attribute 'users.0.last_auth' expected to be set
2026-09-11T00:45:53.7892411Z         Check 9/9 error: data.mongodbatlas_team.test: Attribute 'users.0.created_at' expected to be set
2026-09-11T00:45:53.7927897Z --- FAIL: TestAccConfigDSTeam_basic (3.03s)
```

  - FAIL 3 seconds

### Error 2026-09-11T06:44:33+00:00
```
2026-09-11T06:44:33.8672533Z === RUN   TestAccConfigDSTeam_basic
2026-09-11T06:44:33.8718177Z === CONT  TestAccConfigDSTeam_basic
2026-09-11T06:44:33.8727358Z === NAME  TestAccConfigDSTeam_basic
2026-09-11T06:44:33.8728214Z     data_source_team_test.go:20: Step 1/1 error: Check failed: Check 4/9 error: data.mongodbatlas_team.test: Attribute 'usernames.#' expected "1", got "0"
2026-09-11T06:44:33.8729255Z         Check 5/9 error: data.mongodbatlas_team.test: Attribute 'users.0.team_ids.0' expected to be set
2026-09-11T06:44:33.8730426Z         Check 6/9 error: data.mongodbatlas_team.test: Attribute 'users.0.roles.0.project_role_assignments.#' expected to be set
2026-09-11T06:44:33.8731403Z         Check 7/9 error: data.mongodbatlas_team.test: Attribute 'users.0.username' expected to be set
2026-09-11T06:44:33.8732260Z         Check 8/9 error: data.mongodbatlas_team.test: Attribute 'users.0.last_auth' expected to be set
2026-09-11T06:44:33.8733144Z         Check 9/9 error: data.mongodbatlas_team.test: Attribute 'users.0.created_at' expected to be set
2026-09-11T06:44:33.8778626Z --- FAIL: TestAccConfigDSTeam_basic (3.52s)
```

- 2026-09-12

### Error 2026-09-12T00:44:11+00:00
```
2026-09-12T00:44:11.6704181Z === RUN   TestAccConfigDSTeam_basic
2026-09-12T00:44:11.6707362Z === CONT  TestAccConfigDSTeam_basic
2026-09-12T00:44:11.6714366Z === NAME  TestAccConfigDSTeam_basic
2026-09-12T00:44:11.6715012Z     data_source_team_test.go:20: Step 1/1 error: Check failed: Check 4/9 error: data.mongodbatlas_team.test: Attribute 'usernames.#' expected "1", got "0"
2026-09-12T00:44:11.6715778Z         Check 5/9 error: data.mongodbatlas_team.test: Attribute 'users.0.team_ids.0' expected to be set
2026-09-12T00:44:11.6716522Z         Check 6/9 error: data.mongodbatlas_team.test: Attribute 'users.0.roles.0.project_role_assignments.#' expected to be set
2026-09-12T00:44:11.6717243Z         Check 7/9 error: data.mongodbatlas_team.test: Attribute 'users.0.username' expected to be set
2026-09-12T00:44:11.6717880Z         Check 8/9 error: data.mongodbatlas_team.test: Attribute 'users.0.last_auth' expected to be set
2026-09-12T00:44:11.6718517Z         Check 9/9 error: data.mongodbatlas_team.test: Attribute 'users.0.created_at' expected to be set
2026-09-12T00:44:11.6761423Z --- FAIL: TestAccConfigDSTeam_basic (2.31s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:49:31+00:00
```
2026-09-14T00:49:31.3866455Z === RUN   TestAccConfigDSTeam_basic
2026-09-14T00:49:31.3907914Z === CONT  TestAccConfigDSTeam_basic
2026-09-14T00:49:31.3915533Z === NAME  TestAccConfigDSTeam_basic
2026-09-14T00:49:31.3916190Z     data_source_team_test.go:20: Step 1/1 error: Check failed: Check 4/9 error: data.mongodbatlas_team.test: Attribute 'usernames.#' expected "1", got "0"
2026-09-14T00:49:31.3916952Z         Check 5/9 error: data.mongodbatlas_team.test: Attribute 'users.0.team_ids.0' expected to be set
2026-09-14T00:49:31.3917704Z         Check 6/9 error: data.mongodbatlas_team.test: Attribute 'users.0.roles.0.project_role_assignments.#' expected to be set
2026-09-14T00:49:31.3918419Z         Check 7/9 error: data.mongodbatlas_team.test: Attribute 'users.0.username' expected to be set
2026-09-14T00:49:31.3919085Z         Check 8/9 error: data.mongodbatlas_team.test: Attribute 'users.0.last_auth' expected to be set
2026-09-14T00:49:31.3919813Z         Check 9/9 error: data.mongodbatlas_team.test: Attribute 'users.0.created_at' expected to be set
2026-09-14T00:49:31.3960537Z --- FAIL: TestAccConfigDSTeam_basic (2.37s)
```


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 4 seconds
- 2026-09-14: MISSING
