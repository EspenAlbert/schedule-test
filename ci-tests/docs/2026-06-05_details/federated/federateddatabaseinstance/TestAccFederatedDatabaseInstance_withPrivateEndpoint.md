# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_withPrivateEndpoint Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 6 minutes
- 2026-05-08 PASS 6 minutes
- 2026-05-09 PASS 6 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 minutes
- 2026-05-12 PASS 6 minutes
- 2026-05-13 PASS 6 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15 PASS 6 minutes
- 2026-05-16 PASS 7 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 minutes
- 2026-05-19 PASS 6 minutes
- 2026-05-20 PASS 6 minutes
- 2026-05-21 PASS 7 minutes
- 2026-05-22 PASS 6 minutes
- 2026-05-23 PASS 7 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 minutes
- 2026-05-26 PASS 6 minutes
- 2026-05-27 PASS 6 minutes
- 2026-05-28 PASS 7 minutes
- 2026-05-29 PASS 6 minutes
- 2026-05-30 PASS 6 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 minutes
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2234850Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-06-02T01:12:44.2235621Z     resource_federated_database_instance_test.go:192: Creating execution project (1): test-acc-tf-p-7172816897032360211
2026-06-02T01:12:44.2236289Z     resource_federated_database_instance_test.go:192: 
2026-06-02T01:12:44.2237262Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:44.2239149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:44.2240937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:44.2243127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:192
2026-06-02T01:12:44.2244238Z         	Error:      	Received unexpected error:
2026-06-02T01:12:44.2246162Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2247266Z         	Test:       	TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-06-02T01:12:44.2249185Z         	Messages:   	Project creation failed: test-acc-tf-p-7172816897032360211, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2250449Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (86.55s)
```

- 2026-06-03 PASS 6 minutes
- 2026-06-04 PASS 6 minutes
- 2026-06-05 PASS 6 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
