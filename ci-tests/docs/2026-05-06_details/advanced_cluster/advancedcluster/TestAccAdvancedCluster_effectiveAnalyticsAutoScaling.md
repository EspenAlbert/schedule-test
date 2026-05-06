# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:39](#error-2026-04-09t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.03s
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032838379397d109d0bb0/clusters | dev | out_of_capacity | 12.03s
[2026-04-30 00:55](#error-2026-04-30t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 26 minutes
- 2026-04-09

### Error 2026-04-09T00:39:14+00:00
```
2026-04-09T00:39:14.6744602Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-09T00:41:07.9926194Z     shared_resource.go:160: 
2026-04-09T00:41:07.9928329Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:07.9931699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-09T00:41:07.9935158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-09T00:41:07.9938213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-09T00:41:07.9940590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-09T00:41:07.9943089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-09T00:41:07.9945726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-04-09T00:41:07.9946723Z         	Error:      	Received unexpected error:
2026-04-09T00:41:07.9948978Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:07.9950309Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-09T00:41:07.9952416Z         	Messages:   	Project creation failed: test-acc-tf-p-582093010579338710, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:07.9953831Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (113.32s)
```

- 2026-04-10 PASS 41 minutes
- 2026-04-11 PASS 25 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14 PASS 27 minutes
- 2026-04-15 PASS 28 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7582616Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-16T00:54:54.6595719Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-16T00:54:59.6970382Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-16T00:54:59.6971473Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.6972211Z         
2026-04-16T00:54:59.6972636Z         Error: Error in create
2026-04-16T00:54:59.6973059Z         
2026-04-16T00:54:59.6973652Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6975077Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6976250Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6976825Z         
2026-04-16T00:54:59.6977605Z         cluster name: test-acc-tf-c-7624291296693758970, API error details:
2026-04-16T00:54:59.6978849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032838379397d109d0bb0/clusters
2026-04-16T00:54:59.6980108Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6981230Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6982095Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.7640790Z    test_name=TestAccClusterAdvancedCluster_priority
2026-04-16T00:54:59.8578024Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (12.28s)
```

- 2026-04-17 PASS 24 minutes
- 2026-04-18 PASS 36 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 33 minutes
- 2026-04-22 PASS 39 minutes
- 2026-04-23 PASS 40 minutes
- 2026-04-24 PASS 27 minutes
- 2026-04-25 PASS 25 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 30 minutes
- 2026-04-28 PASS 27 minutes
- 2026-04-29 PASS 29 minutes
- 2026-04-30

### Error 2026-04-30T00:55:51+00:00
```
2026-04-30T00:55:51.2663346Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-30T00:56:54.4325387Z     shared_resource.go:160: 
2026-04-30T00:56:54.4328574Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:56:54.4335821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T00:56:54.4341818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T00:56:54.4345605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T00:56:54.4349562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T00:56:54.4352370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-30T00:56:54.4355844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-04-30T00:56:54.4356908Z         	Error:      	Received unexpected error:
2026-04-30T00:56:54.4359357Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:54.4360784Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-04-30T00:56:54.4363049Z         	Messages:   	Project creation failed: test-acc-tf-p-4565836823988975415, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:54.4365796Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (63.17s)
```

- 2026-05-01 PASS 27 minutes
- 2026-05-02 PASS 26 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05 PASS 48 minutes
- 2026-05-06 PASS 45 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 25 minutes
  - PASS 23 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 27 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 29 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 27 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 28 minutes
