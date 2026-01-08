# project/projectipaccesslist/TestAccProjectIPAccesslist_settingIPAddress Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-30 00:36](#error-2025-12-30t0036420000) | Step 1 1,2 | dev | 15.06s
[2026-01-08 08:00](#error-2026-01-08t0800590000) |  | dev | 11.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 27 seconds
  - PASS 2 minutes
- 2025-12-11 PASS 27 seconds
- 2025-12-12 PASS 2 minutes
- 2025-12-13 PASS 2 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 25 seconds
- 2025-12-16 PASS 28 seconds
- 2025-12-17 PASS 27 seconds
- 2025-12-18 PASS 29 seconds
- 2025-12-19 PASS 37 seconds
- 2025-12-20 PASS 28 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 2 minutes
- 2025-12-23 PASS 28 seconds
- 2025-12-24 PASS 2 minutes
- 2025-12-25 PASS 27 seconds
- 2025-12-26 PASS 27 seconds
- 2025-12-27 PASS 27 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:36:42+00:00
```
2025-12-30T00:36:42.5661303Z === RUN   TestAccProjectIPAccesslist_settingIPAddress
2025-12-30T00:36:42.5663049Z     resource_project_ip_access_list_test.go:24: Creating execution project: test-acc-tf-p-3072782365384982778
2025-12-30T00:36:42.5670564Z === CONT  TestAccProjectIPAccesslist_settingIPAddress
2025-12-30T00:36:42.5703747Z === NAME  TestAccProjectIPAccesslist_settingIPAddress
2025-12-30T00:36:42.5705416Z     resource_project_ip_access_list_test.go:31: Step 1/3 error: Check failed: Check 1/8 error: project ip access list entry (179.154.226.253/32) does not exist
2025-12-30T00:36:42.5706927Z         Check 2/8 error: project ip access list entry (179.154.226.253) does not exist
2025-12-30T00:36:42.5708561Z --- FAIL: TestAccProjectIPAccesslist_settingIPAddress (15.57s)
```

- 2025-12-31 PASS 27 seconds
- 2026-01-01 PASS 4 minutes
- 2026-01-02 PASS 2 minutes
- 2026-01-03 PASS 29 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 27 seconds
- 2026-01-06 PASS 41 seconds
- 2026-01-07 PASS 39 seconds
- 2026-01-08
  - PASS 42 seconds
  - FAIL 11 seconds

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4249674Z === RUN   TestAccProjectIPAccesslist_settingIPAddress
2026-01-08T08:00:59.4255297Z === CONT  TestAccProjectIPAccesslist_settingIPAddress
2026-01-08T08:00:59.4332699Z === NAME  TestAccProjectIPAccesslist_settingIPAddress
2026-01-08T08:00:59.4333324Z     resource_project_ip_access_list_test.go:31: Step 1/4 error: Error running apply: exit status 1
2026-01-08T08:00:59.4333935Z         
2026-01-08T08:00:59.4334216Z         Error: error creating resource
2026-01-08T08:00:59.4334617Z         
2026-01-08T08:00:59.4334989Z           with mongodbatlas_project_ip_access_list.test,
2026-01-08T08:00:59.4335721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_ip_access_list" "test":
2026-01-08T08:00:59.4336537Z           12: 		resource "mongodbatlas_project_ip_access_list" "test" {
2026-01-08T08:00:59.4336899Z         
2026-01-08T08:00:59.4337379Z         error creating Project IP Access List information: error getting Project IP
2026-01-08T08:00:59.4337851Z         Access List information:
2026-01-08T08:00:59.4338547Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList/179.154.226.100
2026-01-08T08:00:59.4339318Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T08:00:59.4339999Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T08:00:59.4345738Z --- FAIL: TestAccProjectIPAccesslist_settingIPAddress (11.21s)
```

  - PASS 41 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 23 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 2 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 2 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 36 seconds
