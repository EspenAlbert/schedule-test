# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 0.09s
[2026-02-03 00:42](#error-2026-02-03t0042400000) | NO_CAPACITY /api/atlas/v2/groups/698143c7b2e54ee99590e162/containers | dev | 0.09s

### Timeline
- 2026-01-07: MISSING
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
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 4 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 4 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22
  - PASS 5 minutes
  - PASS 3 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 4 minutes
- 2026-01-30 PASS 3 minutes
- 2026-01-31 PASS 3 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 minutes
- 2026-02-03

### Error 2026-02-03T00:42:40+00:00
```
2026-02-03T00:42:40.3178661Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-02-03T00:42:40.3182690Z === CONT  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-02-03T00:42:40.3196460Z === NAME  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-02-03T00:42:40.3197342Z     resource_project_ip_access_list_test.go:106: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:40.3197836Z         
2026-02-03T00:42:40.3199800Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c7b2e54ee99590e162/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143c7b2e54ee99590e162. Reason: Conflict. Params: [AWS 698143c7b2e54ee99590e162], BadRequestDetail: 
2026-02-03T00:42:40.3201367Z         
2026-02-03T00:42:40.3201727Z           with mongodbatlas_network_container.test,
2026-02-03T00:42:40.3202453Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:42:40.3203142Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-03T00:42:40.3203485Z         
2026-02-03T00:42:40.3203820Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.94s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 5 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
