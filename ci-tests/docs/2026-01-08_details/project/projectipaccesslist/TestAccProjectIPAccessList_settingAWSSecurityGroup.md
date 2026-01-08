# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 0.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-12-11 PASS 3 minutes
- 2025-12-12 PASS 3 minutes
- 2025-12-13 PASS 3 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16 PASS 3 minutes
- 2025-12-17 PASS 3 minutes
- 2025-12-18 PASS 3 minutes
- 2025-12-19 PASS 3 minutes
- 2025-12-20 PASS 3 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23 PASS 3 minutes
- 2025-12-24 PASS 3 minutes
- 2025-12-25 PASS 3 minutes
- 2025-12-26 PASS 3 minutes
- 2025-12-27 PASS 3 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 minutes
- 2025-12-31 PASS 3 minutes
- 2026-01-01 PASS 3 minutes
- 2026-01-02 PASS 3 minutes
- 2026-01-03 PASS 3 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 minutes
- 2026-01-06 PASS 3 minutes
- 2026-01-07 PASS 3 minutes
- 2026-01-08
  - PASS 3 minutes
  - FAIL a moment

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4251264Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-01-08T08:00:59.4254408Z === CONT  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-01-08T08:00:59.4268546Z === NAME  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-01-08T08:00:59.4269201Z     resource_project_ip_access_list_test.go:102: Step 1/3 error: Error running apply: exit status 1
2026-01-08T08:00:59.4269661Z         
2026-01-08T08:00:59.4271014Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/containers POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T08:00:59.4271971Z         
2026-01-08T08:00:59.4272320Z           with mongodbatlas_network_container.test,
2026-01-08T08:00:59.4273018Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-01-08T08:00:59.4273676Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-01-08T08:00:59.4274013Z         
2026-01-08T08:00:59.4274547Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.93s)
```

  - PASS 3 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 3 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
