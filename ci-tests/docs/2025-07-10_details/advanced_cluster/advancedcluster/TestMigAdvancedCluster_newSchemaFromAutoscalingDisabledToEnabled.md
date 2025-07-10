# advanced_cluster/advancedcluster/TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 2)
Success rate: 98.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030090000) |  | qa |  | 0.01s
[2025-06-05 00:29](#error-2025-06-05t0029110000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-2759410441844827667 | dev | flaky_500 | 249.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 19 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 22 minutes
- 2025-04-18 PASS 21 minutes
- 2025-04-19 PASS 22 minutes
- 2025-04-20 PASS 20 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 21 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 19 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 19 minutes
- 2025-04-27 PASS 23 minutes
- 2025-04-28 PASS 20 minutes
- 2025-04-29 PASS 20 minutes
- 2025-04-30 PASS 25 minutes
- 2025-05-01
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 20 minutes
- 2025-05-02 PASS 25 minutes
- 2025-05-03 PASS 22 minutes
- 2025-05-04 PASS 22 minutes
- 2025-05-05 PASS 20 minutes
- 2025-05-06 PASS 21 minutes
- 2025-05-07 PASS 21 minutes
- 2025-05-08 PASS 23 minutes
- 2025-05-09 PASS 25 minutes
- 2025-05-10 PASS 21 minutes
- 2025-05-11

### Error 2025-05-11T00:30:09+00:00
```
2025-05-11T00:30:09.4287401Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-05-11T00:30:09.4906168Z     shared_resource.go:84: 
2025-05-11T00:30:09.4907770Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.4910085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.4912665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.4915085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.4917611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_migration_test.go:234
2025-05-11T00:30:09.4918701Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.4919799Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.4921316Z         	Test:       	TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-05-11T00:30:09.4923211Z         	Messages:   	Project creation failed: test-acc-tf-p-5343615596506342325, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.4924520Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (0.06s)
```

- 2025-05-12 PASS 21 minutes
- 2025-05-13
  - PASS 21 minutes
  - PASS 19 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 24 minutes
- 2025-05-16 PASS 21 minutes
- 2025-05-17 PASS 22 minutes
- 2025-05-18 PASS 18 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 23 minutes
- 2025-05-21 PASS 20 minutes
- 2025-05-22 PASS 23 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24 PASS 21 minutes
- 2025-05-25 PASS 23 minutes
- 2025-05-26 PASS 23 minutes
- 2025-05-27 PASS 23 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-05-29
  - PASS 30 minutes
  - PASS 21 minutes
- 2025-05-30
  - PASS an hour
  - PASS 25 minutes
- 2025-05-31 PASS 25 minutes
- 2025-06-01
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 24 minutes
  - PASS 35 minutes
  - PASS 25 minutes
- 2025-06-03 PASS 23 minutes
- 2025-06-04 PASS 23 minutes
- 2025-06-05

### Error 2025-06-05T00:29:11+00:00
```
2025-06-05T00:29:11.3287166Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-06-05T00:35:42.8273849Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-06-05T00:36:47.8235851Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-06-05T00:36:47.8238100Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:47.823224528Z, ProjectID: 6840e4d5161ca93c1f052fd9, Cluster name: test-acc-tf-c-2759410441844827667
2025-06-05T00:39:51.8696876Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-06-05T00:39:51.8697629Z     resource_advanced_cluster_migration_test.go:236: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:39:51.8698087Z         
2025-06-05T00:39:51.8699772Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-2759410441844827667 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:51.8701108Z         
2025-06-05T00:39:51.8701433Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:51.8702075Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:51.8702664Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:51.8702974Z         
2025-06-05T00:39:52.0284573Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (249.21s)
```

- 2025-06-06 PASS 30 minutes
- 2025-06-07 PASS 22 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 50 minutes
- 2025-06-10 PASS 16 minutes
- 2025-06-11
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-06-12 PASS 24 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 26 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 33 minutes
- 2025-06-17 PASS 24 minutes
- 2025-06-18
  - PASS 24 minutes
  - PASS 19 minutes
- 2025-06-19 PASS 47 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 23 minutes
- 2025-06-22 PASS 18 minutes
- 2025-06-23 PASS 18 minutes
- 2025-06-24 PASS 29 minutes
- 2025-06-25 PASS 17 minutes
- 2025-06-26 PASS 17 minutes
- 2025-06-27 PASS 28 minutes
- 2025-06-28 PASS 22 minutes
- 2025-06-29 PASS 23 minutes
- 2025-06-30 PASS 21 minutes
- 2025-07-01
  - PASS 26 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 20 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 17 minutes