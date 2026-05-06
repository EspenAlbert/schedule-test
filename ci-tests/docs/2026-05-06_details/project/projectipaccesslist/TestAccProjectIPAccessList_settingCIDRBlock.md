# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-05 00:58](#error-2026-05-05t0058030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 28 seconds
- 2026-04-08 PASS 26 seconds
- 2026-04-09 PASS 32 seconds
- 2026-04-10 PASS 25 seconds
- 2026-04-11 PASS 36 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 24 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 24 seconds
- 2026-04-18 PASS 30 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 25 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 25 seconds
- 2026-04-23 PASS 35 seconds
- 2026-04-24 PASS 24 seconds
- 2026-04-25 PASS 31 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 26 seconds
- 2026-04-28 PASS 28 seconds
- 2026-04-29 PASS 25 seconds
- 2026-04-30 PASS 32 seconds
- 2026-05-01 PASS 26 seconds
- 2026-05-02 PASS 29 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 25 seconds
- 2026-05-05

### Error 2026-05-05T00:58:03+00:00
```
2026-05-05T00:58:03.1433556Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-05T00:58:03.1434866Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-4048910294252133517
2026-05-05T00:58:03.1436005Z     resource_project_ip_access_list_test.go:58: 
2026-05-05T00:58:03.1437871Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:58:03.1441967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:58:03.1445556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:58:03.1450014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-05T00:58:03.1451749Z         	Error:      	Received unexpected error:
2026-05-05T00:58:03.1455640Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:58:03.1457685Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-05T00:58:03.1461389Z         	Messages:   	Project creation failed: test-acc-tf-p-4048910294252133517, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:58:03.1463659Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (99.82s)
```

- 2026-05-06 PASS 28 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 24 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 23 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 28 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 23 seconds
- 2026-05-04 PASS 26 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 26 seconds
