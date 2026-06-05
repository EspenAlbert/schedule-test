# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 28 minutes
- 2026-05-09 PASS 23 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 26 minutes
- 2026-05-12 PASS 22 minutes
- 2026-05-13 PASS 24 minutes
- 2026-05-14 PASS 41 minutes
- 2026-05-15 PASS 24 minutes
- 2026-05-16 PASS 15 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 56 minutes
- 2026-05-19 PASS 15 minutes
- 2026-05-20 PASS 25 minutes
- 2026-05-21 PASS 19 minutes
- 2026-05-22 PASS 50 minutes
- 2026-05-23 PASS 27 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 27 minutes
- 2026-05-26 PASS 17 minutes
- 2026-05-27 PASS an hour
- 2026-05-28 PASS 26 minutes
- 2026-05-29 PASS 25 minutes
- 2026-05-30 PASS 15 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 25 minutes
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2215810Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-06-02T01:12:44.2216589Z     resource_federated_database_instance_test.go:160: Creating execution project (1): test-acc-tf-p-1462251859081034990
2026-06-02T01:12:44.2217286Z     resource_federated_database_instance_test.go:160: 
2026-06-02T01:12:44.2218442Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:44.2220651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:44.2222433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:44.2224155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-06-02T01:12:44.2226329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:160
2026-06-02T01:12:44.2227672Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:12:44.2228210Z         	Error:      	Received unexpected error:
2026-06-02T01:12:44.2230336Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2231419Z         	Test:       	TestAccFederatedDatabaseInstance_atlasCluster
2026-06-02T01:12:44.2233183Z         	Messages:   	Project creation failed: test-acc-tf-p-1462251859081034990, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2234360Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (69.57s)
```

- 2026-06-03 PASS 43 minutes
- 2026-06-04 PASS 37 minutes
- 2026-06-05 PASS 28 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 01:26](#error-2026-05-10t0126170000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69ffd83d6768cfe24d97366b/clusters | qa | out_of_capacity | 1255.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T01:26:17+00:00
```
2026-05-10T01:26:17.3378527Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-05-10T01:26:17.3383128Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-05-10T01:26:17.3384137Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-05-10T01:26:17.3385993Z     pre_check.go:46: Time before creating cluster: 2026-05-10T01:05:26.309335598Z, ProjectID: 69ffd83d6768cfe24d97366b, Cluster name: test-acc-tf-c-6418295708912552125
2026-05-10T01:26:17.3419871Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-05-10T01:26:17.3420550Z     resource_federated_database_instance_test.go:171: Step 1/1 error: Error running apply: exit status 1
2026-05-10T01:26:17.3421051Z         
2026-05-10T01:26:17.3421308Z         Error: Error in create
2026-05-10T01:26:17.3421569Z         
2026-05-10T01:26:17.3421920Z           with mongodbatlas_advanced_cluster.cluster2,
2026-05-10T01:26:17.3422628Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-05-10T01:26:17.3423303Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-05-10T01:26:17.3423645Z         
2026-05-10T01:26:17.3424226Z         cluster name: test-acc-tf-c-1790031327894063278, API error details:
2026-05-10T01:26:17.3424923Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ffd83d6768cfe24d97366b/clusters
2026-05-10T01:26:17.3425629Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-10T01:26:17.3426630Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-10T01:26:17.3427155Z         Conflict. Params: [], BadRequestDetail: 
2026-05-10T01:26:17.3427578Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1255.44s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
