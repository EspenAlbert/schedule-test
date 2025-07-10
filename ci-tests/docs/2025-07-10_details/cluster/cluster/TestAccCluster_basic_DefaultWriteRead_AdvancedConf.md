# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-4494107623361738502 | dev | flaky_500 | 241.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 16 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 13 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 13 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 17 minutes
- 2025-04-21 PASS 15 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 14 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 18 minutes
- 2025-04-26 PASS 16 minutes
- 2025-04-27 PASS 17 minutes
- 2025-04-28 PASS 15 minutes
- 2025-04-29 PASS 14 minutes
- 2025-04-30 PASS 17 minutes
- 2025-05-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 17 minutes
- 2025-05-04 PASS 14 minutes
- 2025-05-05 PASS 13 minutes
- 2025-05-06 PASS 18 minutes
- 2025-05-07 PASS 18 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 17 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3087618Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-05-11T00:29:40.3132642Z     shared_resource.go:84: 
2025-05-11T00:29:40.3134234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3136838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3138561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3140258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3142037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:159
2025-05-11T00:29:40.3143853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:220
2025-05-11T00:29:40.3144600Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3145666Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3146280Z         	Test:       	TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-05-11T00:29:40.3147419Z         	Messages:   	Project creation failed: test-acc-tf-p-8142433816411407651, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3148155Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (0.01s)
```

- 2025-05-12 PASS 13 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-05-14 PASS 21 minutes
- 2025-05-15 PASS 16 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 16 minutes
- 2025-05-19 PASS 15 minutes
- 2025-05-20 PASS 16 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 19 minutes
- 2025-05-23 PASS 25 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 15 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-05-29
  - PASS 19 minutes
  - PASS 13 minutes
- 2025-05-30
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-05-31 PASS 14 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-06-02
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-06-03 PASS 16 minutes
- 2025-06-04 PASS 14 minutes
- 2025-06-05

### Error 2025-06-05T00:28:44+00:00
```
2025-06-05T00:28:44.4426979Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-06-05T00:28:48.8435239Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-06-05T00:28:52.9993938Z    test_step_number=1 test_name=TestAccCluster_WithTags test_terraform_path=/home/runner/work/_temp/13237515-a3fb-42a7-b662-560f40ada6b9/terraform
2025-06-05T00:29:48.8635833Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-06-05T00:29:48.8637325Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:48.863296634Z, ProjectID: 6840e4b9161ca93c1f051d05, Cluster name: test-acc-tf-c-4494107623361738502
2025-06-05T00:31:51.7770166Z   
2025-06-05T00:32:49.8232982Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2025-06-05T00:32:49.8233901Z     resource_cluster_test.go:220: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:49.8234570Z         
2025-06-05T00:32:49.8237753Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-4494107623361738502 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:49.8239803Z         
2025-06-05T00:32:49.8240300Z           with mongodbatlas_cluster.test,
2025-06-05T00:32:49.8241323Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:32:49.8242268Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-06-05T00:32:49.8242774Z         
2025-06-05T00:32:49.8712252Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (241.03s)
```

- 2025-06-06 PASS 16 minutes
- 2025-06-07 PASS 17 minutes
- 2025-06-08 PASS 15 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 17 minutes
- 2025-06-13 PASS 17 minutes
- 2025-06-14 PASS 48 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18 PASS 23 minutes
- 2025-06-19 PASS 33 minutes
- 2025-06-20 PASS 16 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 14 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 16 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 18 minutes
- 2025-07-01
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 15 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 14 minutes