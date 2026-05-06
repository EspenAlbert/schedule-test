# config/atlasuser/TestAccConfigDSAtlasUsers_ByTeamID Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-14 00:51](#error-2026-04-14t0051310000) |  | dev | 2.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 22 seconds
- 2026-04-08 PASS 4 seconds
- 2026-04-09 PASS 40 seconds
- 2026-04-10 PASS 3 seconds
- 2026-04-11 PASS 25 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14

### Error 2026-04-14T00:51:31+00:00
```
2026-04-14T00:51:31.0462672Z === RUN   TestAccConfigDSAtlasUsers_ByTeamID
2026-04-14T00:51:31.0532154Z === CONT  TestAccConfigDSAtlasUsers_ByTeamID
2026-04-14T00:51:31.0551854Z === NAME  TestAccConfigDSAtlasUsers_ByTeamID
2026-04-14T00:51:31.0552492Z     data_source_atlas_users_test.go:93: Step 1/1 error: Error running apply: exit status 1
2026-04-14T00:51:31.0552937Z         
2026-04-14T00:51:31.0554140Z         Error: error creating Team information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/teams POST: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-04-14T00:51:31.0554999Z         
2026-04-14T00:51:31.0555303Z           with mongodbatlas_team.test,
2026-04-14T00:51:31.0555902Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_team" "test":
2026-04-14T00:51:31.0556462Z           12: 		resource "mongodbatlas_team" "test" {
2026-04-14T00:51:31.0556772Z         
2026-04-14T00:51:31.0557034Z --- FAIL: TestAccConfigDSAtlasUsers_ByTeamID (2.12s)
```

- 2026-04-15 PASS 4 seconds
- 2026-04-16 PASS 24 seconds
- 2026-04-17 PASS 4 seconds
- 2026-04-18 PASS 23 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 4 seconds
- 2026-04-21 PASS 22 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 21 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 23 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 23 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30 PASS 31 seconds
- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 22 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 seconds
- 2026-05-05 PASS 38 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 seconds
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 seconds
