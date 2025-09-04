# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 43 minutes
- 2025-08-07 PASS 55 minutes
- 2025-08-08 PASS 53 minutes
- 2025-08-09 PASS 42 minutes
- 2025-08-10 PASS 47 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 53 minutes
  - PASS 31 minutes
- 2025-08-13 PASS 40 minutes
- 2025-08-14 PASS 43 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 57 minutes
- 2025-08-18 PASS 42 minutes
- 2025-08-19 PASS 41 minutes
- 2025-08-20
  - PASS 47 minutes
  - PASS 57 minutes
- 2025-08-21 PASS 47 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 41 minutes
- 2025-08-24 PASS 36 minutes
- 2025-08-25 PASS 41 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 59 minutes
- 2025-08-28 PASS 41 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 40 minutes
- 2025-08-31 PASS 41 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7231809Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-09-01T00:30:49.7232400Z     shared_resource.go:93: 
2025-09-01T00:30:49.7233277Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7234986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7236723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7238422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7240126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7242323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:812
2025-09-01T00:30:49.7244376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:807
2025-09-01T00:30:49.7245181Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7247816Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7249220Z         	Test:       	TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema
2025-09-01T00:30:49.7251686Z         	Messages:   	Project creation failed: test-acc-tf-p-2018840104873236524, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7253209Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricGeoShardedOldSchema (0.17s)
```

  - PASS an hour
  - PASS an hour
  - PASS 44 minutes
  - PASS 40 minutes
  - PASS 39 minutes
  - PASS 38 minutes
  - PASS 38 minutes
- 2025-09-02 PASS 41 minutes
- 2025-09-03 PASS 54 minutes
- 2025-09-04 PASS 45 minutes