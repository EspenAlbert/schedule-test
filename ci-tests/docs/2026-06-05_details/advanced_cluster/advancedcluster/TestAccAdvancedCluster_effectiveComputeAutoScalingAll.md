# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingAll Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057020000) |  | dev |  | 159.10s
[2026-05-18 01:00](#error-2026-05-18t0100300000) |  | dev |  | 1782.10s
[2026-05-28 01:01](#error-2026-05-28t0101080000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s
[2026-06-02 01:15](#error-2026-06-02t0115170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 37 minutes
- 2026-05-08 PASS 24 minutes
- 2026-05-09 PASS 24 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 20 minutes
- 2026-05-13 PASS 19 minutes
- 2026-05-14 PASS 47 minutes
- 2026-05-15

### Error 2026-05-15T00:57:02+00:00
```
2026-05-15T00:57:02.6025316Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-15T00:58:37.6879749Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-15T01:01:16.8947615Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-15T01:01:16.8949447Z     effective_fields_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-05-15T01:01:16.8950266Z         
2026-05-15T01:01:16.8950777Z         Error: Error in create
2026-05-15T01:01:16.8951280Z         
2026-05-15T01:01:16.8951941Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T01:01:16.8953216Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T01:01:16.8954404Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T01:01:16.8955024Z         
2026-05-15T01:01:16.8955923Z         cluster=test-acc-tf-c-4714017657091921546 didn't reach desired state: IDLE,
2026-05-15T01:01:16.8956761Z         error:
2026-05-15T01:01:16.8958105Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f5cbf5881c97de60e59/clusters/test-acc-tf-c-4714017657091921546
2026-05-15T01:01:16.8959767Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:16.8960626Z         BadRequestDetail: 
2026-05-15T01:01:16.9442707Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (159.98s)
```

- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:30+00:00
```
2026-05-18T01:00:30.3669271Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-18T01:02:28.9625363Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-18T01:02:29.0317099Z   diagnostic_detail=
2026-05-18T01:02:29.0325371Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State" tf_req_id=6592512f-909e-ba77-7cd0-00fe586b8f52
2026-05-18T01:22:36.0207950Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-18T01:22:36.0209085Z     effective_fields_test.go:127: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2026-05-18T01:22:36.0209927Z         
2026-05-18T01:22:36.0210575Z         Error: error reading Advanced Configuration
2026-05-18T01:22:36.0211164Z         
2026-05-18T01:22:36.0211987Z           with mongodbatlas_advanced_cluster.test,
2026-05-18T01:22:36.0213112Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-18T01:22:36.0214187Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-18T01:22:36.0214700Z         
2026-05-18T01:22:36.0215363Z         cluster name: test-acc-tf-c-8100024426106863646, API error details:
2026-05-18T01:22:36.0216910Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64ab6fb087b449da01ac/clusters/test-acc-tf-c-8100024426106863646/processArgs
2026-05-18T01:22:36.0218314Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:22:36.0218989Z         BadRequestDetail: 
2026-05-18T01:22:36.5965042Z    test_working_directory=/tmp/plugintest1394666172
2026-05-18T01:32:11.9356728Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (1782.97s)
```

- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 18 minutes
- 2026-05-22 PASS 38 minutes
- 2026-05-23 PASS 27 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 27 minutes
- 2026-05-26 PASS 21 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:08+00:00
```
2026-05-28T01:01:08.6875601Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-28T01:01:10.6518671Z     shared_resource.go:160: 
2026-05-28T01:01:10.6520401Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:10.6522779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:10.6524634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:10.6526426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:10.6528591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:10.6530614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:10.6533038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:124
2026-05-28T01:01:10.6533985Z         	Error:      	Received unexpected error:
2026-05-28T01:01:10.6536919Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:10.6538560Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-05-28T01:01:10.6540953Z         	Messages:   	Project creation failed: test-acc-tf-p-9110304661540332724, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:10.6542516Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (1.97s)
```

- 2026-05-29 PASS 19 minutes
- 2026-05-30 PASS 18 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02

### Error 2026-06-02T01:15:17+00:00
```
2026-06-02T01:15:17.6131654Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-06-02T01:15:17.6132600Z     shared_resource.go:160: 
2026-06-02T01:15:17.6134913Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:17.6137314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:15:17.6139642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:15:17.6142209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:15:17.6144544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:15:17.6146737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-06-02T01:15:17.6149004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:124
2026-06-02T01:15:17.6149886Z         	Error:      	Received unexpected error:
2026-06-02T01:15:17.6152012Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:17.6153186Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-06-02T01:15:17.6155060Z         	Messages:   	Project creation failed: test-acc-tf-p-8671347590100095251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:17.6156383Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (97.45s)
```

- 2026-06-03 PASS 23 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 25 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 25 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
