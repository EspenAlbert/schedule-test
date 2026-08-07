# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 00:53](#error-2026-07-16t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 24 minutes
- 2026-07-10 PASS 41 minutes
- 2026-07-11 PASS 17 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 32 minutes
- 2026-07-14 PASS 22 minutes
- 2026-07-15 PASS 28 minutes
- 2026-07-16

### Error 2026-07-16T00:53:51+00:00
```
2026-07-16T00:53:51.1310704Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-07-16T00:53:51.1311477Z     resource_federated_database_instance_test.go:160: Creating execution project (1): test-acc-tf-p-2948230128816790267
2026-07-16T00:53:51.1312174Z     resource_federated_database_instance_test.go:160: 
2026-07-16T00:53:51.1313173Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:53:51.1315207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:53:51.1317388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:53:51.1319148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-16T00:53:51.1321369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:160
2026-07-16T00:53:51.1322745Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:53:51.1323276Z         	Error:      	Received unexpected error:
2026-07-16T00:53:51.1325245Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:51.1326355Z         	Test:       	TestAccFederatedDatabaseInstance_atlasCluster
2026-07-16T00:53:51.1328417Z         	Messages:   	Project creation failed: test-acc-tf-p-2948230128816790267, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:51.1329658Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (68.76s)
```

- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 17 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 15 minutes
- 2026-07-22 PASS an hour
- 2026-07-23 PASS 59 minutes
- 2026-07-24 PASS 40 minutes
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 33 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 15 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 32 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 35 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 26 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 24 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
