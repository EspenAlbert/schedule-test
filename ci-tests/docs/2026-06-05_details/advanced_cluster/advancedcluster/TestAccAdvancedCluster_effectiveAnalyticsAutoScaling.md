# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s
[2026-05-21 01:03](#error-2026-05-21t0103240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-05-23 01:00](#error-2026-05-23t0100310000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a10fc0fc0b16ce515f1fba8/clusters | dev | out_of_capacity | 5.04s
[2026-05-28 01:01](#error-2026-05-28t0101150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 47 minutes
- 2026-05-08 PASS 38 minutes
- 2026-05-09

### Error 2026-05-09T00:56:04+00:00
```
2026-05-09T00:56:04.1192462Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-09T00:57:17.7133451Z     shared_resource.go:160: 
2026-05-09T00:57:17.7141302Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:57:17.7145635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:57:17.7148797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:57:17.7151398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:57:17.7154522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:57:17.7156450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-09T00:57:17.7158817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-05-09T00:57:17.7160227Z         	Error:      	Received unexpected error:
2026-05-09T00:57:17.7166044Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:17.7169306Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-09T00:57:17.7171394Z         	Messages:   	Project creation failed: test-acc-tf-p-2019132589388116876, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:17.7172612Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (73.59s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 31 minutes
- 2026-05-12 PASS 33 minutes
- 2026-05-13 PASS 33 minutes
- 2026-05-14 PASS 56 minutes
- 2026-05-15 PASS 29 minutes
- 2026-05-16 PASS 25 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 47 minutes
- 2026-05-19 PASS 28 minutes
- 2026-05-20 PASS 34 minutes
- 2026-05-21

### Error 2026-05-21T01:03:24+00:00
```
2026-05-21T01:03:24.1507551Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-21T01:04:31.0221817Z     shared_resource.go:160: 
2026-05-21T01:04:31.0226531Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:04:31.0228488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:04:31.0230336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:04:31.0232171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:04:31.0233960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:04:31.0236209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-21T01:04:31.0238566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-05-21T01:04:31.0239388Z         	Error:      	Received unexpected error:
2026-05-21T01:04:31.0241300Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.0242432Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-21T01:04:31.0244256Z         	Messages:   	Project creation failed: test-acc-tf-p-4543806755562722552, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.0245826Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (66.87s)
```

- 2026-05-22 PASS 49 minutes
- 2026-05-23

### Error 2026-05-23T01:00:31+00:00
```
2026-05-23T01:00:31.2098501Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-23T01:06:52.8964609Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-23T01:06:58.2121045Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-23T01:06:58.2122381Z     effective_fields_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:06:58.2123340Z         
2026-05-23T01:06:58.2124715Z         Error: Error in create
2026-05-23T01:06:58.2125525Z         
2026-05-23T01:06:58.2126385Z           with mongodbatlas_advanced_cluster.test,
2026-05-23T01:06:58.2127811Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-23T01:06:58.2129524Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-23T01:06:58.2130171Z         
2026-05-23T01:06:58.2131175Z         cluster name: test-acc-tf-c-1966471080433547105, API error details:
2026-05-23T01:06:58.2132582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a10fc0fc0b16ce515f1fba8/clusters
2026-05-23T01:06:58.2133859Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-23T01:06:58.2136168Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-23T01:06:58.2137990Z         Conflict. Params: [], BadRequestDetail: 
2026-05-23T01:06:58.2873657Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (5.39s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 34 minutes
- 2026-05-26 PASS 26 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:15+00:00
```
2026-05-28T01:01:15.5371549Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-28T01:01:16.7284485Z     shared_resource.go:160: 
2026-05-28T01:01:16.7285730Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:16.7287860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:16.7289668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:16.7291469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:16.7293221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:16.7295152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:16.7297740Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-05-28T01:01:16.7298602Z         	Error:      	Received unexpected error:
2026-05-28T01:01:16.7301708Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:16.7303176Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-05-28T01:01:16.7305556Z         	Messages:   	Project creation failed: test-acc-tf-p-5551733312502356144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:16.7307311Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (1.19s)
```

- 2026-05-29 PASS 34 minutes
- 2026-05-30 PASS 25 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 44 minutes
- 2026-06-02 PASS 25 minutes
- 2026-06-03 PASS 42 minutes
- 2026-06-04 PASS 53 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 29 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 27 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
