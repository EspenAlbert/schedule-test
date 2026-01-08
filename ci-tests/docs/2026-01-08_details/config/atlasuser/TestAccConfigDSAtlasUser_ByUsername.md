# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a second
  - PASS a second
- 2025-12-11 PASS 3 seconds
- 2025-12-12 PASS a second
- 2025-12-13 PASS 3 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS a second
- 2025-12-16 PASS 3 seconds
- 2025-12-17 PASS a second
- 2025-12-18 PASS 3 seconds
- 2025-12-19 PASS a second
- 2025-12-20 PASS 3 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS a second
- 2025-12-23 PASS 3 seconds
- 2025-12-24 PASS a second
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 2 seconds
- 2025-12-27 PASS 3 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS a second
- 2026-01-01 PASS 3 seconds
- 2026-01-02 PASS a second
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS a second
- 2026-01-06 PASS 4 seconds
- 2026-01-07 PASS a second
- 2026-01-08 PASS 4 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 00:34](#error-2025-12-14t0034290000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2025-12-21 00:34](#error-2025-12-21t0034270000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2025-12-28 00:35](#error-2025-12-28t0035570000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 0.06s
[2026-01-04 00:35](#error-2026-01-04t0035360000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 1.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T00:34:29+00:00
```
2025-12-14T00:34:29.9722248Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-12-14T00:34:29.9728742Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2025-12-14T00:34:29.9729957Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.61s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21

### Error 2025-12-21T00:34:27+00:00
```
2025-12-21T00:34:27.5349075Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-12-21T00:34:27.5383578Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2025-12-21T00:34:27.5384635Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.60s)
```

- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28

### Error 2025-12-28T00:35:57+00:00
```
2025-12-28T00:35:57.8407353Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2025-12-28T00:35:57.8563740Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2025-12-28T00:35:57.8567454Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (0.62s)
```

- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04

### Error 2026-01-04T00:35:36+00:00
```
2026-01-04T00:35:36.7050509Z === RUN   TestAccConfigDSAtlasUser_ByUsername
2026-01-04T00:35:36.7056416Z     data_source_atlas_user_test.go:44: Step 1/1 error: Check failed: Check 9/12 error: data.mongodbatlas_atlas_user.test: Attribute "team_ids.#" value: 0 is not greater than 0
2026-01-04T00:35:36.7057566Z --- FAIL: TestAccConfigDSAtlasUser_ByUsername (1.10s)
```

- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a second
