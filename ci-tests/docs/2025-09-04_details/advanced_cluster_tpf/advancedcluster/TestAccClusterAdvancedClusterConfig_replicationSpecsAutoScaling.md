# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2025-09-01 11:01](#error-2025-09-01t1101140000) |  | dev | 5507.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 50 minutes
- 2025-08-07 PASS 58 minutes
- 2025-08-08 PASS 45 minutes
- 2025-08-09 PASS 41 minutes
- 2025-08-10 PASS 46 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 32 minutes
- 2025-08-13 PASS 48 minutes
- 2025-08-14 PASS 39 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 51 minutes
- 2025-08-18 PASS 40 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 39 minutes
  - PASS 44 minutes
- 2025-08-21 PASS 53 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24 PASS 46 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 53 minutes
- 2025-08-27 PASS 41 minutes
- 2025-08-28 PASS 41 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 37 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7088805Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T00:30:49.7089236Z     shared_resource.go:93: 
2025-09-01T00:30:49.7090108Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7092031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7093774Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7095504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7097230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7099195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:529
2025-09-01T00:30:49.7100002Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7103060Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7104620Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T00:30:49.7106903Z         	Messages:   	Project creation failed: test-acc-tf-p-137330849072197734, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7108395Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (0.17s)
```

  - PASS an hour
  - FAIL an hour

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4445156Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T11:01:14.4551173Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T11:01:14.4643404Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T11:01:14.4644310Z     pre_check.go:40: Time before creating cluster: 2025-09-01T08:00:54.045397621Z, ProjectID: 68b551eee551ff23b4095504, Cluster name: test-acc-tf-c-4636210523216676432
2025-09-01T11:01:14.4778569Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2025-09-01T11:01:14.4779360Z     resource_advanced_cluster_test.go:540: Step 4/5 error: Error running apply: exit status 1
2025-09-01T11:01:14.4779948Z         
2025-09-01T11:01:14.4780338Z         Error: Provider produced inconsistent result after apply
2025-09-01T11:01:14.4780663Z         
2025-09-01T11:01:14.4781090Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T11:01:14.4781711Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T11:01:14.4782132Z         unexpected new value:
2025-09-01T11:01:14.4782634Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-09-01T11:01:14.4783156Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-01T11:01:14.4783455Z         
2025-09-01T11:01:14.4783902Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T11:01:14.4784306Z         issue tracker.
2025-09-01T11:01:14.4784521Z         
2025-09-01T11:01:14.4784898Z         Error: Provider produced inconsistent result after apply
2025-09-01T11:01:14.4785215Z         
2025-09-01T11:01:14.4785760Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T11:01:14.4786544Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T11:01:14.4786966Z         unexpected new value:
2025-09-01T11:01:14.4787457Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-09-01T11:01:14.4787970Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-01T11:01:14.4788266Z         
2025-09-01T11:01:14.4788705Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T11:01:14.4789099Z         issue tracker.
2025-09-01T11:01:14.4790767Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (5507.96s)
```

  - PASS 36 minutes
  - PASS 38 minutes
  - PASS 40 minutes
  - PASS 35 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 42 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 42 minutes