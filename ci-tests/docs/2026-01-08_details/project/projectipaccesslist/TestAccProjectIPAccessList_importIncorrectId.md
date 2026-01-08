# project/projectipaccesslist/TestAccProjectIPAccessList_importIncorrectId Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-30 00:36](#error-2025-12-30t0036420000) |  | dev | 11.10s
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 10.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 2 minutes
  - PASS 12 seconds
- 2025-12-11 PASS 12 seconds
- 2025-12-12 PASS 23 seconds
- 2025-12-13 PASS 12 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16 PASS 13 seconds
- 2025-12-17 PASS 13 seconds
- 2025-12-18 PASS 4 minutes
- 2025-12-19 PASS 2 minutes
- 2025-12-20 PASS 4 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23 PASS 12 seconds
- 2025-12-24 PASS 12 seconds
- 2025-12-25 PASS 12 seconds
- 2025-12-26 PASS 2 minutes
- 2025-12-27 PASS 2 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:36:42+00:00
```
2025-12-30T00:36:42.5669269Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2025-12-30T00:36:42.5671741Z === CONT  TestAccProjectIPAccessList_importIncorrectId
2025-12-30T00:36:42.5686630Z === NAME  TestAccProjectIPAccessList_importIncorrectId
2025-12-30T00:36:42.5687756Z     resource_project_ip_access_list_test.go:164: Step 1/2 error: Error running apply: exit status 1
2025-12-30T00:36:42.5688535Z         
2025-12-30T00:36:42.5689210Z         Error: Provider produced inconsistent result after apply
2025-12-30T00:36:42.5689804Z         
2025-12-30T00:36:42.5690625Z         When applying changes to mongodbatlas_project_ip_access_list.test, provider
2025-12-30T00:36:42.5691800Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-12-30T00:36:42.5692929Z         unexpected new value: .comment: was cty.StringVal("TestAcc for ipaddres
2025-12-30T00:36:42.5694155Z         (179.154.226.253)"), but now cty.StringVal("TestAcc for ipAddress
2025-12-30T00:36:42.5694840Z         (179.154.226.253)").
2025-12-30T00:36:42.5695246Z         
2025-12-30T00:36:42.5696059Z         This is a bug in the provider, which should be reported in the provider's own
2025-12-30T00:36:42.5696790Z         issue tracker.
2025-12-30T00:36:42.5702604Z    test_working_directory=/tmp/plugintest3857249577 test_name=TestAccProjectIPAccesslist_settingIPAddress
2025-12-30T00:36:42.5707773Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (11.97s)
```

- 2025-12-31 PASS 13 seconds
- 2026-01-01 PASS 12 seconds
- 2026-01-02 PASS 4 minutes
- 2026-01-03 PASS 13 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 minutes
- 2026-01-06 PASS 22 seconds
- 2026-01-07 PASS 13 seconds
- 2026-01-08
  - PASS 13 seconds
  - FAIL 10 seconds

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4253064Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2026-01-08T08:00:59.4254917Z === CONT  TestAccProjectIPAccessList_importIncorrectId
2026-01-08T08:00:59.4286713Z === NAME  TestAccProjectIPAccessList_importIncorrectId
2026-01-08T08:00:59.4287338Z     resource_project_ip_access_list_test.go:176: Step 1/2 error: Error running apply: exit status 1
2026-01-08T08:00:59.4287806Z         
2026-01-08T08:00:59.4288084Z         Error: error creating resource
2026-01-08T08:00:59.4288359Z         
2026-01-08T08:00:59.4288725Z           with mongodbatlas_project_ip_access_list.test,
2026-01-08T08:00:59.4289464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_ip_access_list" "test":
2026-01-08T08:00:59.4290157Z           12: 		resource "mongodbatlas_project_ip_access_list" "test" {
2026-01-08T08:00:59.4290504Z         
2026-01-08T08:00:59.4290863Z         error creating Project IP Access List information:
2026-01-08T08:00:59.4291523Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList
2026-01-08T08:00:59.4292246Z         POST: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:00:59.4292693Z         BadRequestDetail: 
2026-01-08T08:00:59.4293040Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (10.85s)
```

  - PASS 12 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 2 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 11 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
