# config/atlasuser/TestAccConfigDSAtlasUser_ByUsername Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS a second
- 2026-01-01 PASS 3 seconds
- 2026-01-02 PASS a second
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS a second

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-04 00:35](#error-2026-01-04t0035360000) | CheckFailure for atlas_user.test at Step: 1 Checks: 9 | qa | 1.01s

### Timeline
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
