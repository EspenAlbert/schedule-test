# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) |  | dev |  | 51.02s
[2025-07-10 04:28](#error-2025-07-10t0428210000) |  | dev | flaky_check | 282.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 minutes
- 2025-04-13 PASS 23 minutes
- 2025-04-14 PASS 16 minutes
- 2025-04-15 PASS 15 minutes
- 2025-04-16
  - PASS 16 minutes
  - PASS 22 minutes
- 2025-04-17 PASS 18 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 14 minutes
- 2025-04-20 PASS 18 minutes
- 2025-04-21 PASS 17 minutes
- 2025-04-22 PASS 18 minutes
- 2025-04-23 PASS 17 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 18 minutes
- 2025-04-28 PASS 14 minutes
- 2025-04-29 PASS 18 minutes
- 2025-04-30 PASS 16 minutes
- 2025-05-01
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 18 minutes
- 2025-05-03 PASS 17 minutes
- 2025-05-04 PASS 15 minutes
- 2025-05-05 PASS 16 minutes
- 2025-05-06 PASS 16 minutes
- 2025-05-07 PASS 14 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 18 minutes
- 2025-05-10 PASS 18 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7769756Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-11T00:30:01.7770116Z     shared_resource.go:84: 
2025-05-11T00:30:01.7770998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7773033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7774769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7776485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7778446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:161
2025-05-11T00:30:01.7779254Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7780113Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7780703Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2025-05-11T00:30:01.7781916Z         	Messages:   	Project creation failed: test-acc-tf-p-1467152817770417098, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7782632Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (0.02s)
```

- 2025-05-12 PASS 14 minutes
- 2025-05-13
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 16 minutes
- 2025-05-17 PASS 14 minutes
- 2025-05-18 PASS 14 minutes
- 2025-05-19 PASS 12 minutes
- 2025-05-20 PASS 17 minutes
- 2025-05-21
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 15 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 20 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 13 minutes
- 2025-05-28
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-05-29 PASS 38 minutes
- 2025-05-30
  - PASS 47 minutes
  - PASS 20 minutes
- 2025-05-31 PASS 16 minutes
- 2025-06-01
  - PASS 19 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-06-02
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 14 minutes
- 2025-06-04 PASS 14 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5870844Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:35:38.5871405Z     resource_advanced_cluster_test.go:167: Adding variable groupId=6840e4c7161ca93c1f052870
2025-06-05T00:35:38.5872105Z     resource_advanced_cluster_test.go:167: Adding variable clusterName=test-acc-tf-c-7197694981391801262
2025-06-05T00:35:38.5948804Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:35:38.6737713Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-06-05T00:35:38.6738533Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:16.018887502Z, ProjectID: 6840e4c7161ca93c1f052870, Cluster name: test-acc-tf-c-7197694981391801262
2025-06-05T00:35:38.6745343Z   
2025-06-05T00:35:38.6745692Z     resource_advanced_cluster_test.go:167: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6745781Z         
2025-06-05T00:35:38.6745931Z         Error: Error in create
2025-06-05T00:35:38.6746129Z         
2025-06-05T00:35:38.6746352Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6746801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6747079Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6747165Z         
2025-06-05T00:35:38.6747480Z         cluster name: test-acc-tf-c-7197694981391801262, API error details:
2025-06-05T00:35:38.6747891Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters
2025-06-05T00:35:38.6748088Z         POST: HTTP 400 Bad Request (Error code:
2025-06-05T00:35:38.6748601Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-06-05T00:35:38.6748951Z         with instance size M0 via the public api: This project has reached the limit
2025-06-05T00:35:38.6749298Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-06-05T00:35:38.6749640Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-06-05T00:35:38.6749830Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (51.25s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 15 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 16 minutes
- 2025-06-11
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 17 minutes
- 2025-06-14 PASS 40 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 24 minutes
- 2025-06-17 PASS 16 minutes
- 2025-06-18
  - PASS 20 minutes
  - PASS 17 minutes
- 2025-06-19 PASS 42 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 15 minutes
- 2025-06-22 PASS 18 minutes
- 2025-06-23 PASS 15 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26
  - PASS 20 minutes
  - PASS 12 minutes
- 2025-06-27 PASS 20 minutes
- 2025-06-28 PASS 13 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10

### Error 2025-07-10T04:28:21+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-10T04:28:21.978000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='an hour ago')

```
2025-07-10T04:28:21.9788733Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9789799Z     resource_advanced_cluster_test.go:167: Adding variable clusterName=test-acc-tf-c-7516699658865863677
2025-07-10T04:28:21.9791515Z     resource_advanced_cluster_test.go:167: Adding variable groupId=686f096b964afc762c202a8e
2025-07-10T04:28:21.9919323Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9980812Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9981783Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:37:10.518559812Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-7516699658865863677
2025-07-10T04:28:21.9987233Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:21.9987872Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-8173326876358460266
2025-07-10T04:28:21.9988680Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8198213403529660366
2025-07-10T04:28:22.0007309Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-07-10T04:28:22.0007862Z     resource_advanced_cluster_test.go:167: Step 2/3 error: Error running apply: exit status 1
2025-07-10T04:28:22.0008269Z         
2025-07-10T04:28:22.0008631Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0008944Z         
2025-07-10T04:28:22.0009348Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0009945Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0010350Z         unexpected new value:
2025-07-10T04:28:22.0010825Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-07-10T04:28:22.0011652Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-07-10T04:28:22.0011951Z         
2025-07-10T04:28:22.0012375Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0012761Z         issue tracker.
2025-07-10T04:28:22.0012969Z         
2025-07-10T04:28:22.0013317Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0013634Z         
2025-07-10T04:28:22.0014040Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0014631Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0015032Z         unexpected new value:
2025-07-10T04:28:22.0015496Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-07-10T04:28:22.0015931Z         cty.NumberIntVal(3), but now null.
2025-07-10T04:28:22.0016187Z         
2025-07-10T04:28:22.0016602Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0016984Z         issue tracker.
2025-07-10T04:28:22.0017186Z         
2025-07-10T04:28:22.0017529Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0017833Z         
2025-07-10T04:28:22.0018232Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0018941Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0019393Z         unexpected new value:
2025-07-10T04:28:22.0019881Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-07-10T04:28:22.0020302Z         now cty.StringVal("AWS").
2025-07-10T04:28:22.0020541Z         
2025-07-10T04:28:22.0021136Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0021558Z         issue tracker.
2025-07-10T04:28:22.0021766Z         
2025-07-10T04:28:22.0022108Z         Error: Provider produced inconsistent result after apply
2025-07-10T04:28:22.0022408Z         
2025-07-10T04:28:22.0022808Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-10T04:28:22.0023394Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-10T04:28:22.0023998Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-07-10T04:28:22.0024705Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-07-10T04:28:22.0025017Z         
2025-07-10T04:28:22.0025432Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-10T04:28:22.0025809Z         issue tracker.
2025-07-10T04:28:22.0026113Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (282.30s)
```
