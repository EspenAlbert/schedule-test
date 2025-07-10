# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 0.01s
[2025-05-28 09:05](#error-2025-05-28t0905150000) |  | qa |  | 1057.01s
[2025-06-05 00:35](#error-2025-06-05t0035390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-1327908782022319578 | dev | flaky_500 | 251.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 22 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 18 minutes
- 2025-04-15 PASS 31 minutes
- 2025-04-16
  - PASS 20 minutes
  - PASS 23 minutes
- 2025-04-17 PASS 20 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 21 minutes
- 2025-04-21 PASS 20 minutes
- 2025-04-22 PASS 21 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 22 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 21 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 20 minutes
- 2025-04-30 PASS 26 minutes
- 2025-05-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 14 minutes
- 2025-05-02 PASS 23 minutes
- 2025-05-03 PASS 20 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 20 minutes
- 2025-05-06 PASS 20 minutes
- 2025-05-07 PASS 18 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 21 minutes
- 2025-05-10 PASS 17 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.9663193Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-11T00:30:11.0291408Z     shared_resource.go:84: 
2025-05-11T00:30:11.0293206Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:11.0296030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:11.0298392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:11.0319386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:11.0321620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1121
2025-05-11T00:30:11.0322449Z         	Error:      	Received unexpected error:
2025-05-11T00:30:11.0323302Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.0323908Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-11T00:30:11.0324919Z         	Messages:   	Project creation failed: test-acc-tf-p-552405227959872819, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.0325645Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.06s)
```

- 2025-05-12 PASS 19 minutes
- 2025-05-13
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-05-14 PASS 21 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 19 minutes
- 2025-05-18 PASS 20 minutes
- 2025-05-19 PASS 24 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 23 minutes
- 2025-05-22 PASS 23 minutes
- 2025-05-23 PASS 29 minutes
- 2025-05-24 PASS 19 minutes
- 2025-05-25 PASS 22 minutes
- 2025-05-26 PASS 20 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 15 minutes
  - FAIL 17 minutes

### Error 2025-05-28T09:05:15+00:00
```
2025-05-28T09:05:15.2356940Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:19.1757774Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:29.1689407Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:06:29.1691253Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:06:29.168640777Z, ProjectID: 6836d1c7e6404f5026cf2728, Cluster name: test-acc-tf-c-5289046676670611994
2025-05-28T09:18:53.5800756Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-28T09:18:53.5803250Z     resource_advanced_cluster_test.go:1126: Step 1/3 error: Error running apply: exit status 1
2025-05-28T09:18:53.5804106Z         
2025-05-28T09:18:53.5804652Z         Error: error reading advanced cluster
2025-05-28T09:18:53.5805146Z         
2025-05-28T09:18:53.5805700Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T09:18:53.5806866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T09:18:53.5807919Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T09:18:53.5808459Z         
2025-05-28T09:18:53.5809211Z         cluster name: test-acc-tf-c-5289046676670611994, API error details: (503
2025-05-28T09:18:53.5810365Z         Service Unavailable) failed to decode response body: undefined response type
2025-05-28T09:18:53.5887574Z    test_step_number=1
2025-05-28T09:23:56.2254015Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1057.06s)
```

  - PASS 18 minutes
- 2025-05-29
  - PASS 26 minutes
  - PASS 13 minutes
- 2025-05-30
  - PASS an hour
  - PASS 19 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 22 minutes
  - PASS 33 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 19 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:35:39+00:00
```
2025-06-05T00:35:39.9466201Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:35:42.8421775Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:36:52.8239761Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:36:52.8241938Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:52.823577994Z, ProjectID: 6840e657161ca93c1f054546, Cluster name: test-acc-tf-c-1327908782022319578
2025-06-05T00:39:53.9886597Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:39:53.9887367Z     resource_advanced_cluster_test.go:1126: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:39:53.9887947Z         
2025-06-05T00:39:53.9889857Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e657161ca93c1f054546/clusters/test-acc-tf-c-1327908782022319578 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:53.9891386Z         
2025-06-05T00:39:53.9891820Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:53.9892468Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:53.9893062Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:53.9893366Z         
2025-06-05T00:39:54.0320542Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (251.20s)
```

- 2025-06-06 PASS 28 minutes
- 2025-06-07 PASS 22 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 33 minutes
- 2025-06-10 PASS 14 minutes
- 2025-06-11
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 20 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 27 minutes
- 2025-06-15 PASS 19 minutes
- 2025-06-16 PASS 21 minutes
- 2025-06-17 PASS 16 minutes
- 2025-06-18
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-06-19 PASS 53 minutes
- 2025-06-20 PASS 18 minutes
- 2025-06-21 PASS 18 minutes
- 2025-06-22 PASS 18 minutes
- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 27 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26 PASS 18 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 23 minutes
- 2025-06-29 PASS 21 minutes
- 2025-06-30 PASS 22 minutes
- 2025-07-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-07-02 PASS 20 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 17 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 17 minutes