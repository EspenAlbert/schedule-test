# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:52](#error-2026-07-21t0052240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-23 00:45](#error-2026-07-23t0045140000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a616407103366fa15f2f03d/clusters | dev | out_of_capacity | 4.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 32 minutes
- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 30 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 36 minutes
- 2026-07-15 PASS 34 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 31 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:24+00:00
```
2026-07-21T00:52:24.2208577Z === RUN   TestAccCluster_basicGCP
2026-07-21T00:52:25.4107103Z     shared_resource.go:160: 
2026-07-21T00:52:25.4109229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:25.4112726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:25.4115152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:25.4117738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:25.4119895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:25.4122121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:371
2026-07-21T00:52:25.4122972Z         	Error:      	Received unexpected error:
2026-07-21T00:52:25.4126112Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:25.4127495Z         	Test:       	TestAccCluster_basicGCP
2026-07-21T00:52:25.4129897Z         	Messages:   	Project creation failed: test-acc-tf-p-6516652249831980086, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:25.4131743Z --- FAIL: TestAccCluster_basicGCP (1.19s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23

### Error 2026-07-23T00:45:14+00:00
```
2026-07-23T00:45:14.9506967Z === RUN   TestAccCluster_basicGCP
2026-07-23T00:48:24.6502572Z === CONT  TestAccCluster_basicGCP
2026-07-23T00:48:28.9907944Z === NAME  TestAccCluster_basicGCP
2026-07-23T00:48:28.9908672Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:48:28.9909515Z         
2026-07-23T00:48:28.9911331Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a616407103366fa15f2f03d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-07-23T00:48:28.9912551Z         
2026-07-23T00:48:28.9912994Z           with mongodbatlas_cluster.basic_gcp,
2026-07-23T00:48:28.9913772Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-07-23T00:48:28.9914581Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-07-23T00:48:28.9914921Z         
2026-07-23T00:48:29.0418950Z --- FAIL: TestAccCluster_basicGCP (4.40s)
```

- 2026-07-24 PASS 34 minutes
- 2026-07-25 PASS 40 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 27 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 minutes
- 2026-08-04 PASS 24 minutes
- 2026-08-05 PASS 24 minutes
- 2026-08-06 PASS 24 minutes
- 2026-08-07 PASS 25 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 35 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 minutes
  - PASS 31 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 25 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
