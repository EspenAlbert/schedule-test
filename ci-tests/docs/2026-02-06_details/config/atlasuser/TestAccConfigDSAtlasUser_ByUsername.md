# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 39 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 8)
Success rate: 79.49%

## DEV Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 seconds
- 2026-01-09
  - PASS a second
  - PASS a second
  - PASS a second
- 2026-01-10 PASS 4 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS a second
- 2026-01-13 PASS 3 seconds
- 2026-01-14 PASS a second
- 2026-01-15 PASS 4 seconds
- 2026-01-16 PASS a second
- 2026-01-17 PASS 4 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS a second
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS a second
- 2026-01-22
  - PASS 4 seconds
  - PASS 2 seconds
- 2026-01-23
  - PASS a second
  - PASS a second
- 2026-01-24 PASS 4 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS a second
- 2026-01-27 PASS 4 seconds
- 2026-01-28 PASS a second
- 2026-01-29 PASS 4 seconds
- 2026-01-30 PASS a second
- 2026-01-31 PASS 5 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS a second
- 2026-02-03 PASS 4 seconds
- 2026-02-04 PASS a second
- 2026-02-05 PASS 4 seconds
- 2026-02-06 PASS a second

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-11 00:35](#error-2026-01-11t0035270000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.07s
[2026-01-18 00:35](#error-2026-01-18t0035120000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.08s
[2026-01-22 13:09](#error-2026-01-22t1309020000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-01-25 00:36](#error-2026-01-25t0036210000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.08s
[2026-02-01 00:44](#error-2026-02-01t0044120000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-02-04 11:12](#error-2026-02-04t1112510000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.08s
[2026-02-04 12:30](#error-2026-02-04t1230160000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-02-04 13:26](#error-2026-02-04t1326360000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a second
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11

### Error 2026-01-11T00:35:27+00:00
```
2026-01-11T00:35:27.6492889Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-01-11T00:35:27.6499972Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-01-11T00:35:27.6501344Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.70s)
```

- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18

### Error 2026-01-18T00:35:12+00:00
```
2026-01-18T00:35:12.7954291Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-01-18T00:35:12.7961379Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-01-18T00:35:12.7962739Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.77s)
```

- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22

### Error 2026-01-22T13:09:02+00:00
```
2026-01-22T13:09:02.7217473Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-01-22T13:09:02.7224359Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-01-22T13:09:02.7225908Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.61s)
```

- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25

### Error 2026-01-25T00:36:21+00:00
```
2026-01-25T00:36:21.8932462Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-01-25T00:36:21.8977219Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-01-25T00:36:21.8981922Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.83s)
```

- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01

### Error 2026-02-01T00:44:12+00:00
```
2026-02-01T00:44:12.7645877Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-01T00:44:12.7662700Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-01T00:44:12.7666143Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.63s)
```

- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04
  - FAIL a moment

### Error 2026-02-04T11:12:51+00:00
```
2026-02-04T11:12:51.8828808Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T11:12:51.8845528Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T11:12:51.8851253Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.78s)
```

  - FAIL a moment

### Error 2026-02-04T12:30:16+00:00
```
2026-02-04T12:30:16.3822865Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T12:30:16.3832100Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T12:30:16.3833545Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.56s)
```

  - FAIL a moment

### Error 2026-02-04T13:26:36+00:00
```
2026-02-04T13:26:36.1544590Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-02-04T13:26:36.1555083Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-02-04T13:26:36.1556838Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.75s)
```

- 2026-02-05: MISSING
- 2026-02-06: MISSING
