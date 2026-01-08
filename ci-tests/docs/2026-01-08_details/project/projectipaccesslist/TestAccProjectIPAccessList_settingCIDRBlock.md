# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 08:00](#error-2026-01-08t0800590000) | Step 1 2 | dev | 13.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 4 minutes
  - PASS 23 seconds
- 2025-12-11 PASS 24 seconds
- 2025-12-12 PASS 26 seconds
- 2025-12-13 PASS 2 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 2 minutes
- 2025-12-16 PASS 4 minutes
- 2025-12-17 PASS 36 seconds
- 2025-12-18 PASS 25 seconds
- 2025-12-19 PASS 26 seconds
- 2025-12-20 PASS 25 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 2 minutes
- 2025-12-23 PASS 2 minutes
- 2025-12-24 PASS 23 seconds
- 2025-12-25 PASS 24 seconds
- 2025-12-26 PASS 26 seconds
- 2025-12-27 PASS 4 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 26 seconds
- 2025-12-31 PASS 2 minutes
- 2026-01-01 PASS 35 seconds
- 2026-01-02 PASS 26 seconds
- 2026-01-03 PASS 2 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 2 minutes
- 2026-01-06 PASS 37 seconds
- 2026-01-07 PASS 2 minutes
- 2026-01-08
  - PASS 2 minutes
  - FAIL 13 seconds

### Error 2026-01-08T08:00:59+00:00
```
2026-01-08T08:00:59.4250448Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4255676Z === CONT  TestAccProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4348878Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4349732Z     resource_project_ip_access_list_test.go:67: Step 1/3 error: Check failed: Check 2/8 error: project ip access list entry (179.154.226.114) does not exist
2026-01-08T08:00:59.4358228Z    test_working_directory=/tmp/plugintest161318659
2026-01-08T08:00:59.4405820Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2026-01-08T08:00:59.4406477Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-08T08:00:59.4406942Z         
2026-01-08T08:00:59.4407231Z         Error: error deleting the entry
2026-01-08T08:00:59.4407517Z         
2026-01-08T08:00:59.4407879Z         error deleting Project IP Access List information:
2026-01-08T08:00:59.4408653Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList/179.154.226.114
2026-01-08T08:00:59.4409446Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:00:59.4409910Z         BadRequestDetail: 
2026-01-08T08:00:59.4410155Z         
2026-01-08T08:00:59.4410461Z         Error: error during the read operation
2026-01-08T08:00:59.4410899Z         
2026-01-08T08:00:59.4411254Z         error deleting Project IP Access List information:
2026-01-08T08:00:59.4412004Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f639dbd8c78dbeaf9aa46/accessList/179.154.226.114
2026-01-08T08:00:59.4412790Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2026-01-08T08:00:59.4413239Z         BadRequestDetail: 
2026-01-08T08:00:59.4413585Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (13.08s)
```

  - PASS 37 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 2 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 25 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 26 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 35 seconds
