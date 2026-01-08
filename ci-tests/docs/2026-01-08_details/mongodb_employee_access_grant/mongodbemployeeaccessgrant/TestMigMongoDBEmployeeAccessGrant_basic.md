# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestMigMongoDBEmployeeAccessGrant_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3921530497861143839 | dev | flaky_500 | 185.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 11 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 11 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 11 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 11 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 11 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:34+00:00
```
2026-01-07T00:30:34.6055592Z === RUN   TestMigMongoDBEmployeeAccessGrant_basic
2026-01-07T00:30:34.6058855Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-2323583605498729815
2026-01-07T00:30:38.6782717Z     resource_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3921530497861143839
2026-01-07T00:30:39.4938737Z 2026/01/07 00:30:39 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:33:39.9256778Z     resource_migration_test.go:11: 
2026-01-07T00:33:39.9259473Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:33:39.9262886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:33:39.9267048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-01-07T00:33:39.9269984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_migration_test.go:11
2026-01-07T00:33:39.9271154Z         	Error:      	Received unexpected error:
2026-01-07T00:33:39.9273817Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3921530497861143839 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:39.9275076Z         	Test:       	TestMigMongoDBEmployeeAccessGrant_basic
2026-01-07T00:33:39.9277105Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3921530497861143839, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3921530497861143839 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:39.9278454Z --- FAIL: TestMigMongoDBEmployeeAccessGrant_basic (185.32s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 10 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
