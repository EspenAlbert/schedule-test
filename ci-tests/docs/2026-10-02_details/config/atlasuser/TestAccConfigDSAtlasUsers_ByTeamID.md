# config/atlasuser/TestAccConfigDSAtlasUsers_ByTeamID Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 16:59](#error-2026-09-10t1659030000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 1.08s
[2026-09-11 00:42](#error-2026-09-11t0042530000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 3.06s
[2026-09-11 06:42](#error-2026-09-11t0642370000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 2.05s
[2026-09-12 00:42](#error-2026-09-12t0042050000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 1.08s
[2026-09-14 00:47](#error-2026-09-14t0047310000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 2.01s
[2026-09-15 00:44](#error-2026-09-15t0044470000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 2.06s
[2026-09-16 00:43](#error-2026-09-16t0043490000) | CheckFailure for atlas_users.test at Step: 1 Checks: 3,4,5,6,7,8,9,10 | dev | 1.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 4 seconds
- 2026-09-03 PASS 3 seconds
- 2026-09-04 PASS 3 seconds
- 2026-09-05 PASS 2 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 5 seconds
- 2026-09-08 PASS 2 seconds
- 2026-09-09 PASS 3 seconds
- 2026-09-10
  - PASS 2 seconds
  - FAIL a second

### Error 2026-09-10T16:59:03+00:00
```
2026-09-10T16:59:03.4078991Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-10T16:59:03.4173714Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-10T16:59:03.4213372Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-10T16:59:03.4215243Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-10T16:59:03.4217302Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-10T16:59:03.4218923Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-10T16:59:03.4220474Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-10T16:59:03.4222104Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-10T16:59:03.4223785Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-10T16:59:03.4225422Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-10T16:59:03.4227238Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-10T16:59:03.4229661Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (1.85s)
```

- 2026-09-11
  - FAIL 3 seconds

### Error 2026-09-11T00:42:53+00:00
```
2026-09-11T00:42:53.1723219Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T00:42:53.1764499Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T00:42:53.1778655Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T00:42:53.1779450Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-11T00:42:53.1780277Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-11T00:42:53.1780957Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-11T00:42:53.1781617Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-11T00:42:53.1782321Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-11T00:42:53.1783231Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-11T00:42:53.1783943Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-11T00:42:53.1784647Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-11T00:42:53.1788663Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (3.65s)
```

  - FAIL 2 seconds

### Error 2026-09-11T06:42:37+00:00
```
2026-09-11T06:42:37.8043865Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T06:42:37.9368864Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T06:42:37.9727633Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-11T06:42:37.9730210Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-11T06:42:37.9732630Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-11T06:42:37.9737447Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-11T06:42:37.9739522Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-11T06:42:37.9741861Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-11T06:42:37.9744653Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-11T06:42:37.9746935Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-11T06:42:37.9749161Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-11T06:42:37.9842524Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (2.50s)
```

- 2026-09-12

### Error 2026-09-12T00:42:05+00:00
```
2026-09-12T00:42:05.5755411Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-12T00:42:05.5797096Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-12T00:42:05.5811148Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-12T00:42:05.5811920Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-12T00:42:05.5812761Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-12T00:42:05.5813445Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-12T00:42:05.5814106Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-12T00:42:05.5814804Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-12T00:42:05.5815517Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-12T00:42:05.5816215Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-12T00:42:05.5816915Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-12T00:42:05.5821024Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (1.83s)
```

- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T00:47:31+00:00
```
2026-09-14T00:47:31.1667713Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-14T00:47:31.1873618Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-14T00:47:31.1955937Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-14T00:47:31.1957102Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-14T00:47:31.1958103Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-14T00:47:31.1958972Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-14T00:47:31.1959821Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-14T00:47:31.1960688Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-14T00:47:31.1961799Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-14T00:47:31.1962750Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-14T00:47:31.1963663Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-14T00:47:31.1969215Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (2.13s)
```

- 2026-09-15

### Error 2026-09-15T00:44:47+00:00
```
2026-09-15T00:44:47.7742497Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-15T00:44:47.7809135Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-15T00:44:47.7831119Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-15T00:44:47.7832287Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-15T00:44:47.7833595Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-15T00:44:47.7834691Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-15T00:44:47.7835745Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-15T00:44:47.7836843Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-15T00:44:47.7838094Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-15T00:44:47.7839208Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-15T00:44:47.7840356Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-15T00:44:47.7846522Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (2.60s)
```

- 2026-09-16

### Error 2026-09-16T00:43:49+00:00
```
2026-09-16T00:43:49.0207425Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-09-16T00:43:49.0312356Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-16T00:43:49.0353437Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-09-16T00:43:49.0355320Z     data_source_atlas_users_test.go:93: Step 1/1 error: Check failed: Check 3/10 error: data.mongodbatlas_atlas_users.test: Attribute 'total_count' expected "1", got "0"
2026-09-16T00:43:49.0357250Z         Check 4/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.#' expected "1", got "0"
2026-09-16T00:43:49.0359170Z         Check 5/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.user_id' expected to be set
2026-09-16T00:43:49.0360642Z         Check 6/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.username' not found
2026-09-16T00:43:49.0362259Z         Check 7/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.email_address' expected to be set
2026-09-16T00:43:49.0363874Z         Check 8/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.first_name' expected to be set
2026-09-16T00:43:49.0365470Z         Check 9/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.last_name' expected to be set
2026-09-16T00:43:49.0367064Z         Check 10/10 error: data.mongodbatlas_atlas_users.test: Attribute 'results.0.created_at' expected to be set
2026-09-16T00:43:49.0368973Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (1.90s)
```

- 2026-09-17 PASS 3 seconds
- 2026-09-18 PASS 3 seconds
- 2026-09-19 PASS 3 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 4 seconds
- 2026-09-22 PASS 3 seconds
- 2026-09-23 PASS 3 seconds
- 2026-09-24 PASS 3 seconds
- 2026-09-25 PASS 3 seconds
- 2026-09-26 PASS 2 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 seconds
- 2026-09-29
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-09-30 PASS 4 seconds
- 2026-10-01 PASS 3 seconds
- 2026-10-02 PASS 4 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 3 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 3 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 3 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
