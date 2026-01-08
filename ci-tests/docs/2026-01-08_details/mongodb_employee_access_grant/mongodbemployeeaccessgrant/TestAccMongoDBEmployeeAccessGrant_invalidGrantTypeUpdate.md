# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:49](#error-2026-01-07t0049060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-8278518904974864117 | dev | flaky_500 | 181.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 seconds
  - PASS a second
- 2025-12-11 PASS 2 seconds
- 2025-12-12 PASS 2 seconds
- 2025-12-13 PASS 2 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 2 seconds
- 2025-12-16 PASS 2 seconds
- 2025-12-17 PASS 3 seconds
- 2025-12-18 PASS 2 seconds
- 2025-12-19 PASS 3 seconds
- 2025-12-20 PASS 2 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS a second
- 2025-12-23 PASS 2 seconds
- 2025-12-24 PASS a second
- 2025-12-25 PASS 3 seconds
- 2025-12-26 PASS 3 seconds
- 2025-12-27 PASS 2 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 seconds
- 2025-12-31 PASS a second
- 2026-01-01 PASS 2 seconds
- 2026-01-02 PASS a second
- 2026-01-03 PASS 3 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS a second
- 2026-01-06 PASS 2 seconds
- 2026-01-07

### Error 2026-01-07T00:49:06+00:00
```
2026-01-07T00:49:06.7636749Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-01-07T00:49:06.7637340Z     resource_test.go:115: Creating execution cluster: test-acc-tf-c-8278518904974864117
2026-01-07T00:49:07.5571424Z 2026/01/07 00:49:07 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:52:08.0218518Z     resource_test.go:115: 
2026-01-07T00:52:08.0220296Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:52:08.0222410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:52:08.0224468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:115
2026-01-07T00:52:08.0225335Z         	Error:      	Received unexpected error:
2026-01-07T00:52:08.0227893Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-8278518904974864117 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:52:08.0229352Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-01-07T00:52:08.0231517Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8278518904974864117, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-8278518904974864117 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:52:08.0233033Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (181.26s)
```

- 2026-01-08 PASS 2 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a second
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a second
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 2 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 2 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
