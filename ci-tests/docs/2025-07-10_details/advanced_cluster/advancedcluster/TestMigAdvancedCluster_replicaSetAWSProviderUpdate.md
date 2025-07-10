# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProviderUpdate Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 0.01s
[2025-06-05 00:29](#error-2025-06-05t0029090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4ce161ca93c1f052c81/clusters/test-acc-tf-c-1609881646482007623 | dev | flaky_500 | 217.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 29 minutes
- 2025-04-13 PASS 37 minutes
- 2025-04-14 PASS 28 minutes
- 2025-04-15 PASS 39 minutes
- 2025-04-16
  - PASS 31 minutes
  - PASS 39 minutes
- 2025-04-17 PASS 31 minutes
- 2025-04-18 PASS 29 minutes
- 2025-04-19 PASS 29 minutes
- 2025-04-20 PASS 32 minutes
- 2025-04-21 PASS 36 minutes
- 2025-04-22 PASS 30 minutes
- 2025-04-23 PASS 30 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 31 minutes
- 2025-04-26 PASS 28 minutes
- 2025-04-27 PASS 31 minutes
- 2025-04-28 PASS 29 minutes
- 2025-04-29 PASS 31 minutes
- 2025-04-30 PASS 34 minutes
- 2025-05-01
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 27 minutes
- 2025-05-02 PASS 33 minutes
- 2025-05-03 PASS 30 minutes
- 2025-05-04 PASS 30 minutes
- 2025-05-05 PASS 27 minutes
- 2025-05-06 PASS 28 minutes
- 2025-05-07 PASS 30 minutes
- 2025-05-08 PASS 32 minutes
- 2025-05-09 PASS 33 minutes
- 2025-05-10 PASS 32 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.1173681Z === RUN   TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-05-11T00:30:09.1174348Z     resource_advanced_cluster_migration_test.go:41: Creating execution project: test-acc-tf-p-4312813963170763261
2025-05-11T00:30:09.1783713Z     resource_advanced_cluster_migration_test.go:41: 
2025-05-11T00:30:09.1785252Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.1787590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:09.1789778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:41
2025-05-11T00:30:09.1790850Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.1791769Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.1792737Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-05-11T00:30:09.1793897Z         	Messages:   	Project creation failed: test-acc-tf-p-4312813963170763261, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.1794718Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProviderUpdate (0.06s)
```

- 2025-05-12 PASS 29 minutes
- 2025-05-13
  - PASS 30 minutes
  - PASS 29 minutes
- 2025-05-14 PASS 29 minutes
- 2025-05-15 PASS 31 minutes
- 2025-05-16 PASS 28 minutes
- 2025-05-17 PASS 29 minutes
- 2025-05-18 PASS 31 minutes
- 2025-05-19 PASS 29 minutes
- 2025-05-20 PASS 30 minutes
- 2025-05-21 PASS 29 minutes
- 2025-05-22 PASS 28 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24 PASS 27 minutes
- 2025-05-25 PASS 32 minutes
- 2025-05-26 PASS 31 minutes
- 2025-05-27 PASS 28 minutes
- 2025-05-28
  - PASS 28 minutes
  - PASS 30 minutes
  - PASS 32 minutes
- 2025-05-29
  - PASS 34 minutes
  - PASS 27 minutes
- 2025-05-30
  - PASS an hour
  - PASS 33 minutes
- 2025-05-31 PASS 27 minutes
- 2025-06-01
  - PASS 26 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 26 minutes
- 2025-06-02
  - PASS 31 minutes
  - PASS 35 minutes
  - PASS 28 minutes
- 2025-06-03 PASS 28 minutes
- 2025-06-04 PASS 28 minutes
- 2025-06-05

### Error 2025-06-05T00:29:09+00:00
```
2025-06-05T00:29:09.5477094Z === RUN   TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-06-05T00:35:42.8413191Z === CONT  TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-06-05T00:39:20.5933127Z === NAME  TestMigAdvancedCluster_replicaSetAWSProviderUpdate
2025-06-05T00:39:20.5933784Z     resource_advanced_cluster_migration_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:39:20.5934233Z         
2025-06-05T00:39:20.5936193Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ce161ca93c1f052c81/clusters/test-acc-tf-c-1609881646482007623 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: []
2025-06-05T00:39:20.5937309Z         
2025-06-05T00:39:20.5937642Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:20.5938301Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:20.5938897Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:20.5939211Z         
2025-06-05T00:39:20.7275016Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProviderUpdate (217.91s)
```

- 2025-06-06 PASS 34 minutes
- 2025-06-07 PASS 30 minutes
- 2025-06-08 PASS 30 minutes
- 2025-06-09 PASS 51 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-06-12 PASS 28 minutes
- 2025-06-13 PASS 29 minutes
- 2025-06-14 PASS 52 minutes
- 2025-06-15 PASS 30 minutes
- 2025-06-16 PASS 32 minutes
- 2025-06-17 PASS 46 minutes
- 2025-06-18
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 32 minutes
- 2025-06-21 PASS 30 minutes
- 2025-06-22 PASS 37 minutes
- 2025-06-23 PASS 28 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 28 minutes
- 2025-06-26 PASS 29 minutes
- 2025-06-27 PASS 35 minutes
- 2025-06-28 PASS 29 minutes
- 2025-06-29 PASS 30 minutes
- 2025-06-30 PASS 31 minutes
- 2025-07-01
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 25 minutes
  - PASS 27 minutes
  - PASS 28 minutes
- 2025-07-02 PASS 27 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 26 minutes
- 2025-07-06 PASS 29 minutes
- 2025-07-07 PASS 26 minutes
- 2025-07-08 PASS 46 minutes
- 2025-07-09 PASS 29 minutes
- 2025-07-10 PASS 27 minutes