# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveSetToUnset Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:44](#error-2026-04-11t0044480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.02s
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 5.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 18 minutes
- 2026-04-09 PASS 30 minutes
- 2026-04-10 PASS 20 minutes
- 2026-04-11

### Error 2026-04-11T00:44:48+00:00
```
2026-04-11T00:44:48.0375361Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-04-11T00:46:09.2711004Z     shared_resource.go:160: 
2026-04-11T00:46:09.2713190Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:46:09.2716165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:46:09.2718753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:46:09.2721301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:46:09.2724151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:46:09.2726934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-11T00:46:09.2729808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-04-11T00:46:09.2730666Z         	Error:      	Received unexpected error:
2026-04-11T00:46:09.2732950Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:09.2734085Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-04-11T00:46:09.2735889Z         	Messages:   	Project creation failed: test-acc-tf-p-2321792565241012176, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:09.2737113Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (81.24s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 18 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7569171Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-04-16T00:54:54.7086472Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-04-16T00:54:59.1239123Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-04-16T00:54:59.1240627Z     effective_fields_test.go:58: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.1241500Z         
2026-04-16T00:54:59.1241996Z         Error: Error in create
2026-04-16T00:54:59.1242379Z         
2026-04-16T00:54:59.1242939Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.1243765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.1245426Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.1245903Z         
2026-04-16T00:54:59.1246795Z         cluster name: test-acc-tf-c-3004138076835368426, API error details:
2026-04-16T00:54:59.1248104Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.1249386Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.1250894Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.1252350Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.1270866Z    test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_name=TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-04-16T00:54:59.3672213Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (5.28s)
```

- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 32 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS 31 minutes
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 14 minutes
- 2026-04-30 PASS 31 minutes
- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 15 minutes
  - PASS 13 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 13 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
