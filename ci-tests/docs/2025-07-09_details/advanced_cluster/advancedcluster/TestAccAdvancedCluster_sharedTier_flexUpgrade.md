# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-05-23 00:42 | dev | 452.08s
2025-06-05 00:32 | dev | 186.02s
2025-06-10 00:53 | dev | 780.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
### 2025-04-10
#### PASS 6 minutes
### 2025-04-11
#### PASS 6 minutes
### 2025-04-12
#### PASS 6 minutes
### 2025-04-13
#### PASS 6 minutes
### 2025-04-14
#### PASS 6 minutes
### 2025-04-15
#### PASS 6 minutes
### 2025-04-16
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-04-17
#### PASS 6 minutes
### 2025-04-18
#### PASS 7 minutes
### 2025-04-19
#### PASS 6 minutes
### 2025-04-20
#### PASS 6 minutes
### 2025-04-21
#### PASS 6 minutes
### 2025-04-22
#### PASS 6 minutes
### 2025-04-23
#### PASS 6 minutes
### 2025-04-24
#### PASS 6 minutes
### 2025-04-25
#### PASS 6 minutes
### 2025-04-26
#### PASS 6 minutes
### 2025-04-27
#### PASS 6 minutes
### 2025-04-28
#### PASS 6 minutes
### 2025-04-29
#### PASS 6 minutes
### 2025-04-30
#### PASS 6 minutes
### 2025-05-01
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-05-02
#### PASS 6 minutes
### 2025-05-03
#### PASS 6 minutes
### 2025-05-04
#### PASS 6 minutes
### 2025-05-05
#### PASS 6 minutes
### 2025-05-06
#### PASS 6 minutes
### 2025-05-07
#### PASS 6 minutes
### 2025-05-08
#### PASS 6 minutes
### 2025-05-09
#### PASS 6 minutes
### 2025-05-10
#### PASS 6 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.5557773Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-11T00:30:09.6161514Z     shared_resource.go:84: 
2025-05-11T00:30:09.6163207Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.6165388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.6167154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.6168883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.6171017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:124
2025-05-11T00:30:09.6173105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:157
2025-05-11T00:30:09.6173925Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.6175082Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.6175692Z         	Test:       	TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-11T00:30:09.6176690Z         	Messages:   	Project creation failed: test-acc-tf-p-414059191374383755, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.6177390Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (0.06s)
```
### 2025-05-12
#### PASS 6 minutes
### 2025-05-13
#### PASS 6 minutes
#### PASS 7 minutes
### 2025-05-14
#### PASS 6 minutes
### 2025-05-15
#### PASS 6 minutes
### 2025-05-16
#### PASS 7 minutes
### 2025-05-17
#### PASS 6 minutes
### 2025-05-18
#### PASS 6 minutes
### 2025-05-19
#### PASS 6 minutes
### 2025-05-20
#### PASS 6 minutes
### 2025-05-21
#### PASS 6 minutes
### 2025-05-22
#### PASS 6 minutes
### 2025-05-23
#### FAIL 7 minutes
```
2025-05-23T00:42:36.3599268Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-23T00:42:41.3631620Z     pre_check.go:40: Time before creating cluster: 2025-05-23T00:42:41.362826291Z, ProjectID: 682fc13e1fcba3225667b2df, Cluster name: test-acc-tf-c-3597002692804874244
2025-05-23T00:49:39.1797315Z    test_working_directory=/tmp/plugintest2226575188 test_step_number=2 test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-23T00:49:39.1801350Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 31/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.backing_provider_name' expected "AWS", got ""
2025-05-23T00:49:39.1803983Z         Check 37/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "AWS"
2025-05-23T00:49:39.1806068Z         Check 38/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-3597002692804874244", got "test-acc-tf-c-8077060025682706798"
2025-05-23T00:49:39.1807608Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-05-23T00:49:39.1808773Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-05-23T00:49:39.1809748Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-05-23T00:50:09.1613391Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (452.80s)
```
### 2025-05-24
#### PASS 6 minutes
### 2025-05-25
#### PASS 6 minutes
### 2025-05-26
#### PASS 6 minutes
### 2025-05-27
#### PASS 6 minutes
### 2025-05-28
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-05-29
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-05-30
#### PASS 7 minutes
#### PASS 6 minutes
### 2025-05-31
#### PASS 6 minutes
### 2025-06-01
#### PASS 6 minutes
#### PASS 7 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-06-02
#### PASS 6 minutes
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-06-03
#### PASS 6 minutes
### 2025-06-04
#### PASS 6 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:32:18.3110966Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-06-05T00:32:23.3119558Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:32:23.311593007Z, ProjectID: 6840e4d5161ca93c1f052fd9, Cluster name: test-acc-tf-c-1934003782677936937
2025-06-05T00:35:24.4952186Z    test_name=TestAccAdvancedCluster_sharedTier_flexUpgrade test_terraform_path=/home/runner/work/_temp/2d4b31c9-479e-44d7-b7ae-aa2b06b7e890/terraform
2025-06-05T00:35:24.4953445Z     resource_advanced_cluster_test.go:160: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:24.4953905Z         
2025-06-05T00:35:24.4955994Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d5161ca93c1f052fd9/clusters/test-acc-tf-c-1934003782677936937 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:24.4957350Z         
2025-06-05T00:35:24.4957691Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:24.4958348Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:24.4958940Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:24.4959254Z         
2025-06-05T00:35:24.5406786Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (186.23s)
```
### 2025-06-06
#### PASS 8 minutes
### 2025-06-07
#### PASS 6 minutes
### 2025-06-08
#### PASS 6 minutes
### 2025-06-09
#### PASS 6 minutes
### 2025-06-10
#### FAIL 13 minutes
```
2025-06-10T00:53:16.8419524Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-06-10T00:53:21.8434505Z     pre_check.go:40: Time before creating cluster: 2025-06-10T00:53:21.843127612Z, ProjectID: 68477e739fcc7665ab83150e, Cluster name: test-acc-tf-c-4232166064581289478
2025-06-10T01:05:47.1561644Z    test_working_directory=/tmp/plugintest333674372
2025-06-10T01:05:47.1562915Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 35/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "AWS"
2025-06-10T01:05:47.1564487Z         Check 36/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-c-4232166064581289478", got "test-acc-tf-c-3239540693277591186"
2025-06-10T01:05:47.1565851Z         Check 37/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.backing_provider_name' expected "AWS", got ""
2025-06-10T01:05:47.1567021Z         Check 40/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard' expected to be set
2025-06-10T01:05:47.1568320Z         Check 41/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.connection_strings.0.standard_srv' expected to be set
2025-06-10T01:05:47.1569252Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-06-10T01:06:17.6588632Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (780.82s)
```
### 2025-06-11
#### PASS 7 minutes
#### PASS 6 minutes
### 2025-06-12
#### PASS 7 minutes
### 2025-06-13
#### PASS 6 minutes
### 2025-06-14
#### PASS 27 minutes
### 2025-06-15
#### PASS 7 minutes
### 2025-06-16
#### PASS 7 minutes
### 2025-06-17
#### PASS 9 minutes
### 2025-06-18
#### PASS 6 minutes
#### PASS 6 minutes
### 2025-06-19
#### PASS 7 minutes
### 2025-06-20
#### PASS 7 minutes
### 2025-06-21
#### PASS 7 minutes
### 2025-06-22
#### PASS 7 minutes
### 2025-06-23
#### PASS 7 minutes
### 2025-06-24
#### PASS 6 minutes
### 2025-06-25
#### PASS 7 minutes
### 2025-06-26
#### PASS 6 minutes
### 2025-06-27
#### PASS 6 minutes
### 2025-06-28
#### PASS 6 minutes
### 2025-06-29
#### PASS 7 minutes
### 2025-06-30
#### PASS 8 minutes
### 2025-07-01
#### PASS 7 minutes
#### PASS 7 minutes
#### PASS 6 minutes
#### PASS 7 minutes
#### PASS 6 minutes
### 2025-07-02
#### PASS 7 minutes
### 2025-07-03
#### PASS 7 minutes
### 2025-07-04
#### PASS 7 minutes
### 2025-07-05
#### PASS 6 minutes
### 2025-07-06
#### PASS 6 minutes
### 2025-07-07
#### PASS 6 minutes
### 2025-07-08
#### PASS 7 minutes
### 2025-07-09
#### PASS 7 minutes