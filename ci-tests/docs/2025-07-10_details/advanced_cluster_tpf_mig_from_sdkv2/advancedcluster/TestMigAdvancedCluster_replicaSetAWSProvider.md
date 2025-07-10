# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa |  | 0.02s
[2025-06-05 00:28](#error-2025-06-05t0028560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c8161ca93c1f05296a/clusters/test-acc-tf-c-6342132498635312054 | dev | flaky_500 | 189.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 19 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 12 minutes
- 2025-04-20 PASS 14 minutes
- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 11 minutes
- 2025-04-23 PASS 15 minutes
- 2025-04-24 PASS 13 minutes
- 2025-04-25 PASS 15 minutes
- 2025-04-26 PASS 17 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 12 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-05-01
  - PASS 14 minutes
  - PASS 17 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 14 minutes
- 2025-05-03 PASS 16 minutes
- 2025-05-04 PASS 14 minutes
- 2025-05-05 PASS 15 minutes
- 2025-05-06 PASS 12 minutes
- 2025-05-07
  - PASS 15 minutes
  - PASS 11 minutes
- 2025-05-08 PASS 14 minutes
- 2025-05-09 PASS 17 minutes
- 2025-05-10 PASS 17 minutes
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.9047030Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:29:59.9048102Z     resource_advanced_cluster_migration_test.go:18: Running test SDKv2 to TPF
2025-05-11T00:30:00.1369612Z     shared_resource.go:84: 
2025-05-11T00:30:00.1371824Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:00.1376113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:00.1379973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:00.1384356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:00.1388240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:189
2025-05-11T00:30:00.1390662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:290
2025-05-11T00:30:00.1393005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:18
2025-05-11T00:30:00.1393881Z         	Error:      	Received unexpected error:
2025-05-11T00:30:00.1395233Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1395848Z         	Test:       	TestMigAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:00.1396899Z         	Messages:   	Project creation failed: test-acc-tf-p-1160932378840654437, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:00.1397627Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (0.23s)
```

- 2025-05-12 PASS 14 minutes
- 2025-05-13
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 15 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 12 minutes
- 2025-05-18 PASS 12 minutes
- 2025-05-19 PASS 13 minutes
- 2025-05-20 PASS 13 minutes
- 2025-05-21 PASS 13 minutes
- 2025-05-22 PASS 14 minutes
- 2025-05-23 PASS 13 minutes
- 2025-05-24 PASS 12 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 13 minutes
- 2025-05-28
  - PASS 24 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 19 minutes
- 2025-05-30 PASS 11 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 12 minutes
- 2025-06-05

### Error 2025-06-05T00:28:56+00:00
```
2025-06-05T00:28:56.5334527Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:28:56.5336092Z     resource_advanced_cluster_migration_test.go:18: Running test SDKv2 to TPF
2025-06-05T00:29:00.2534720Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:29:05.2493972Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:29:05.2495930Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:05.249086749Z, ProjectID: 6840e4c8161ca93c1f05296a, Cluster name: test-acc-tf-c-6342132498635312054
2025-06-05T00:29:05.3318328Z   
2025-06-05T00:32:07.5542477Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:32:07.5543258Z     resource_advanced_cluster_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:07.5543800Z         
2025-06-05T00:32:07.5545685Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c8161ca93c1f05296a/clusters/test-acc-tf-c-6342132498635312054 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:07.5546868Z         
2025-06-05T00:32:07.5547206Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:32:07.5547865Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:32:07.5548464Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:32:07.5548782Z         
2025-06-05T00:32:07.7304606Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (189.59s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 14 minutes
- 2025-06-08 PASS 13 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 22 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-06-12 PASS 13 minutes
- 2025-06-13 PASS 12 minutes
- 2025-06-14 PASS 14 minutes
- 2025-06-15 PASS 12 minutes
- 2025-06-16 PASS 12 minutes
- 2025-06-17 PASS 12 minutes
- 2025-06-18 PASS 13 minutes
- 2025-06-19 PASS 14 minutes
- 2025-06-20 PASS 12 minutes
- 2025-06-21 PASS 13 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 11 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 11 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-02
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 13 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10 PASS 12 minutes