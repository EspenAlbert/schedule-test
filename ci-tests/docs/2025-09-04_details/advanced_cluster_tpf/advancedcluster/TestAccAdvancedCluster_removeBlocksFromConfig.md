# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-11 03:50](#error-2025-08-11t0350250000) |  | dev |  | 8067.05s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-03 03:28](#error-2025-09-03t0328550000) |  | dev | timeout | 10805.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS an hour
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 56 minutes
- 2025-08-09 PASS 58 minutes
- 2025-08-10 PASS 53 minutes
- 2025-08-11

### Error 2025-08-11T03:50:25+00:00
```
2025-08-11T03:50:25.9953061Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-08-11T03:50:25.9969201Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-08-11T03:50:26.0226806Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-08-11T03:50:26.0227368Z     resource_advanced_cluster_test.go:1393: Step 3/4 error: Error running apply: exit status 1
2025-08-11T03:50:26.0227779Z         
2025-08-11T03:50:26.0228147Z         Error: Provider produced inconsistent result after apply
2025-08-11T03:50:26.0228463Z         
2025-08-11T03:50:26.0228887Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-11T03:50:26.0229495Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-11T03:50:26.0230025Z         unexpected new value:
2025-08-11T03:50:26.0230515Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-08-11T03:50:26.0231039Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-08-11T03:50:26.0231332Z         
2025-08-11T03:50:26.0231765Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-11T03:50:26.0232152Z         issue tracker.
2025-08-11T03:50:26.0232361Z         
2025-08-11T03:50:26.0232716Z         Error: Provider produced inconsistent result after apply
2025-08-11T03:50:26.0233028Z         
2025-08-11T03:50:26.0233449Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-11T03:50:26.0234053Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-11T03:50:26.0234463Z         unexpected new value:
2025-08-11T03:50:26.0234947Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-08-11T03:50:26.0235449Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-08-11T03:50:26.0235746Z         
2025-08-11T03:50:26.0236169Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-11T03:50:26.0236562Z         issue tracker.
2025-08-11T03:50:26.0236882Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8067.46s)
```

- 2025-08-12
  - PASS an hour
  - PASS 43 minutes
- 2025-08-13 PASS an hour
- 2025-08-14 PASS an hour
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 59 minutes
- 2025-08-18 PASS 58 minutes
- 2025-08-19 PASS 48 minutes
- 2025-08-20
  - PASS 58 minutes
  - PASS an hour
- 2025-08-21 PASS 49 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 57 minutes
- 2025-08-24 PASS 47 minutes
- 2025-08-25 PASS an hour
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 56 minutes
- 2025-08-28 PASS 50 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 49 minutes
- 2025-08-31 PASS an hour
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7478952Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-01T00:30:49.7479330Z     shared_resource.go:93: 
2025-09-01T00:30:49.7480189Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7482135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7483859Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7485558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7487269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7489229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1392
2025-09-01T00:30:49.7490036Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7492892Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7494195Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-01T00:30:49.7496517Z         	Messages:   	Project creation failed: test-acc-tf-p-1345905581690558058, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7497959Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (0.18s)
```

  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 50 minutes
  - PASS 58 minutes
- 2025-09-02 PASS 51 minutes
- 2025-09-03

### Error 2025-09-03T03:28:55+00:00
```
2025-09-03T03:28:55.8727103Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-03T03:28:55.8737305Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-03T03:28:55.8929887Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-03T03:28:55.8930450Z     resource_advanced_cluster_test.go:1394: Step 1/4 error: Error running apply: exit status 1
2025-09-03T03:28:55.8930857Z         
2025-09-03T03:28:55.8931099Z         Error: Error in create
2025-09-03T03:28:55.8931340Z         
2025-09-03T03:28:55.8931650Z           with mongodbatlas_advanced_cluster.test,
2025-09-03T03:28:55.8932279Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-03T03:28:55.8932975Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-03T03:28:55.8933281Z         
2025-09-03T03:28:55.8933713Z         cluster=test-acc-tf-c-6705946506918751039 didn't reach desired state: IDLE,
2025-09-03T03:28:55.8934306Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-09-03T03:28:55.8934725Z         'CREATING', timeout: 3h0m0s)
2025-09-03T03:28:55.8935088Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10805.81s)
```

- 2025-09-04 PASS 51 minutes