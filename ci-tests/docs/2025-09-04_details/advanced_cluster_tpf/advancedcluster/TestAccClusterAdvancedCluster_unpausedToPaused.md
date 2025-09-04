# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 01:34](#error-2025-08-20t0134330000) |  | dev | flaky_500 | 20.08s
[2025-08-21 05:27](#error-2025-08-21t0527020000) |  | dev |  | 45.08s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 45 minutes
- 2025-08-08 PASS 24 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 36 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 34 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 39 minutes
- 2025-08-14 PASS 35 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 35 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 29 minutes
- 2025-08-20
  - FAIL 20 seconds

### Error 2025-08-20T01:34:33+00:00
```
2025-08-20T01:34:33.2701555Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-20T01:34:33.2758614Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-20T01:34:33.2834517Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-20T01:34:33.2835351Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:29:53.287479862Z, ProjectID: 68a5166d552c1710e1fb2f40, Cluster name: test-acc-tf-c-9005870993548933438
2025-08-20T01:34:33.2849166Z   
2025-08-20T01:34:33.2849600Z     resource_advanced_cluster_test.go:315: Step 1/4 error: Error running apply: exit status 1
2025-08-20T01:34:33.2850004Z         
2025-08-20T01:34:33.2850247Z         Error: Error in create
2025-08-20T01:34:33.2850500Z         
2025-08-20T01:34:33.2851190Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T01:34:33.2851877Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T01:34:33.2852462Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T01:34:33.2852759Z         
2025-08-20T01:34:33.2853157Z         cluster name: test-acc-tf-c-9005870993548933438, API error details:
2025-08-20T01:34:33.2853816Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a5166d552c1710e1fb2f40/clusters
2025-08-20T01:34:33.2854335Z         POST: HTTP 403 Forbidden (Error code:
2025-08-20T01:34:33.2854845Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-20T01:34:33.2855422Z         Configuration. Contains selections that are unavailable due to your
2025-08-20T01:34:33.2855988Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-20T01:34:33.2856383Z         BadRequestDetail: 
2025-08-20T01:34:33.2856717Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (20.83s)
```

  - PASS 27 minutes
- 2025-08-21

### Error 2025-08-21T05:27:02+00:00
```
2025-08-21T05:27:02.5599559Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-21T05:27:02.5663333Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-21T05:27:02.5740098Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2025-08-21T05:27:02.5740941Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:37.689503024Z, ProjectID: 68a667dd2e1df52cf3cda401, Cluster name: test-acc-tf-c-7742570004405622618
2025-08-21T05:27:02.5753688Z    test_name=TestAccClusterAdvancedCluster_unpausedToPaused test_terraform_path=/home/runner/work/_temp/def7963f-f2b0-4b6d-ab98-667badff4a76/terraform test_working_directory=/tmp/plugintest233964315
2025-08-21T05:27:02.5754738Z     resource_advanced_cluster_test.go:315: Step 1/4 error: Error running apply: exit status 1
2025-08-21T05:27:02.5755140Z         
2025-08-21T05:27:02.5755380Z         Error: Error in create
2025-08-21T05:27:02.5755617Z         
2025-08-21T05:27:02.5755931Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T05:27:02.5756563Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T05:27:02.5757378Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T05:27:02.5757681Z         
2025-08-21T05:27:02.5758081Z         cluster name: test-acc-tf-c-7742570004405622618, API error details:
2025-08-21T05:27:02.5758743Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a667dd2e1df52cf3cda401/clusters
2025-08-21T05:27:02.5759255Z         POST: HTTP 403 Forbidden (Error code:
2025-08-21T05:27:02.5759744Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-08-21T05:27:02.5760324Z         Configuration. Contains selections that are unavailable due to your
2025-08-21T05:27:02.5760890Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-08-21T05:27:02.5761281Z         BadRequestDetail: 
2025-08-21T05:27:02.5761618Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (45.82s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 20 minutes
- 2025-08-25 PASS 31 minutes
- 2025-08-26 PASS 29 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 33 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 30 minutes
- 2025-08-31 PASS 29 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6923828Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T00:30:49.6924423Z     shared_resource.go:93: 
2025-09-01T00:30:49.6925946Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6929122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6932357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6935595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6938817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.6942863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:311
2025-09-01T00:30:49.6944342Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6949316Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6951790Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2025-09-01T00:30:49.6955843Z         	Messages:   	Project creation failed: test-acc-tf-p-9005235035011423377, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6958524Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (0.18s)
```

  - PASS an hour
  - PASS an hour
  - PASS 24 minutes
  - PASS 33 minutes
  - PASS 37 minutes
  - PASS 29 minutes
  - PASS 25 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 41 minutes
- 2025-09-04 PASS 31 minutes