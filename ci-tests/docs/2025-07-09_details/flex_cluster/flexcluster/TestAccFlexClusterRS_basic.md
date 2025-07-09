# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 107) FAIL(x 6)
Success rate: 94.69%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 0.01s
2025-06-05 00:28 |  | dev |  | 3.09s
2025-07-01 00:30 | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 12.09s
2025-07-01 08:33 | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 13.10s
2025-07-04 00:29 | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 24.06s
2025-07-09 00:29 | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 13.08s

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
2025-04-10: MISSING
### 2025-04-11
#### PASS a minute
### 2025-04-12
#### PASS 58 seconds
### 2025-04-13
#### PASS 58 seconds
### 2025-04-14
#### PASS 59 seconds
### 2025-04-15
#### PASS 57 seconds
### 2025-04-16
#### PASS 59 seconds
#### PASS 59 seconds
### 2025-04-17
#### PASS a minute
### 2025-04-18
#### PASS a minute
### 2025-04-19
#### PASS a minute
### 2025-04-20
#### PASS a minute
### 2025-04-21
#### PASS 58 seconds
### 2025-04-22
#### PASS a minute
### 2025-04-23
#### PASS a minute
### 2025-04-24
#### PASS 59 seconds
### 2025-04-25
#### PASS a minute
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS 58 seconds
### 2025-04-28
#### PASS a minute
### 2025-04-29
#### PASS 59 seconds
### 2025-04-30
#### PASS a minute
#### PASS a minute
### 2025-05-01
#### PASS a minute
#### PASS 57 seconds
#### PASS 57 seconds
#### PASS a minute
#### PASS 59 seconds
#### PASS a minute
#### PASS 59 seconds
### 2025-05-02
#### PASS 58 seconds
### 2025-05-03
#### PASS a minute
### 2025-05-04
#### PASS 59 seconds
### 2025-05-05
#### PASS 59 seconds
### 2025-05-06
#### PASS a minute
### 2025-05-07
#### PASS a minute
### 2025-05-08
#### PASS a minute
### 2025-05-09
#### PASS 59 seconds
### 2025-05-10
#### PASS a minute
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:49.9832027Z === RUN   TestAccFlexClusterRS_basic
2025-05-11T00:29:49.9834828Z     resource_test.go:19: Creating execution project: test-acc-tf-p-6646907537658233064
2025-05-11T00:29:50.0707827Z     resource_test.go:19: 
2025-05-11T00:29:50.0709846Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:50.0711738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:50.0713645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:32
2025-05-11T00:29:50.0715543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:19
2025-05-11T00:29:50.0716382Z         	Error:      	Received unexpected error:
2025-05-11T00:29:50.0717284Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:50.0717836Z         	Test:       	TestAccFlexClusterRS_basic
2025-05-11T00:29:50.0719374Z         	Messages:   	Project creation failed: test-acc-tf-p-6646907537658233064, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:50.0720106Z --- FAIL: TestAccFlexClusterRS_basic (0.09s)
```
### 2025-05-12
#### PASS a minute
### 2025-05-13
#### PASS 59 seconds
#### PASS 58 seconds
### 2025-05-14
#### PASS 58 seconds
### 2025-05-15
#### PASS 58 seconds
### 2025-05-16
#### PASS a minute
### 2025-05-17
#### PASS a minute
### 2025-05-18
#### PASS 58 seconds
### 2025-05-19
#### PASS 59 seconds
### 2025-05-20
#### PASS 59 seconds
### 2025-05-21
#### PASS a minute
### 2025-05-22
#### PASS 59 seconds
### 2025-05-23
#### PASS 58 seconds
### 2025-05-24
#### PASS 59 seconds
### 2025-05-25
#### PASS a minute
### 2025-05-26
#### PASS 58 seconds
### 2025-05-27
#### PASS a minute
### 2025-05-28
#### PASS a minute
#### PASS 58 seconds
### 2025-05-29
#### PASS a minute
### 2025-05-30
#### PASS 59 seconds
### 2025-05-31
#### PASS a minute
### 2025-06-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS 58 seconds
#### PASS a minute
### 2025-06-02
#### PASS 59 seconds
#### PASS a minute
#### PASS a minute
### 2025-06-03
#### PASS 58 seconds
### 2025-06-04
#### PASS a minute
### 2025-06-05
#### FAIL 3 seconds
```
2025-06-05T00:28:46.2836406Z === RUN   TestAccFlexClusterRS_basic
2025-06-05T00:28:46.2849457Z     resource_test.go:19: Creating execution project: test-acc-tf-p-140156852648523224
2025-06-05T00:28:50.1456012Z    test_step_number=1 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/8c20ddcc-0a2f-4b47-8e9e-cd3fee29a2f5/terraform
2025-06-05T00:28:50.1457544Z     resource_test.go:21: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:28:50.1458172Z         
2025-06-05T00:28:50.1460359Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bec939f27413250947/flexClusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:50.1461978Z         
2025-06-05T00:28:50.1462375Z           with mongodbatlas_flex_cluster.test,
2025-06-05T00:28:50.1463029Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-06-05T00:28:50.1463608Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-06-05T00:28:50.1463926Z         
2025-06-05T00:28:50.1464381Z         Name: test-acc-tf-2329169936796206475, Project ID: 6840e4bec939f27413250947
2025-06-05T00:28:50.1930539Z --- FAIL: TestAccFlexClusterRS_basic (3.91s)
```
### 2025-06-06
#### PASS a minute
### 2025-06-07
#### PASS a minute
### 2025-06-08
#### PASS 57 seconds
### 2025-06-09
#### PASS 59 seconds
### 2025-06-10
#### PASS 59 seconds
### 2025-06-11
#### PASS 58 seconds
#### PASS a minute
### 2025-06-12
#### PASS 57 seconds
### 2025-06-13
#### PASS a minute
### 2025-06-14
#### PASS a minute
### 2025-06-15
#### PASS a minute
### 2025-06-16
#### PASS a minute
### 2025-06-17
#### PASS a minute
### 2025-06-18
#### PASS a minute
### 2025-06-19
#### PASS a minute
### 2025-06-20
#### PASS a minute
### 2025-06-21
#### PASS a minute
### 2025-06-22
#### PASS a minute
### 2025-06-23
#### PASS a minute
### 2025-06-24
#### PASS a minute
### 2025-06-25
#### PASS a minute
### 2025-06-26
#### PASS 49 seconds
### 2025-06-27
#### PASS 50 seconds
### 2025-06-28
#### PASS 54 seconds
### 2025-06-29
#### PASS a minute
### 2025-06-30
#### PASS 59 seconds
### 2025-07-01
#### FAIL 12 seconds
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-01T00:30:00.183000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='7 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-01T00:30:00.1830107Z === RUN   TestAccFlexClusterRS_basic
2025-07-01T00:30:00.1831432Z     resource_test.go:19: Creating execution project: test-acc-tf-p-2038590293275666440
2025-07-01T00:30:12.7905615Z    test_terraform_path=/home/runner/work/_temp/305b238b-d16d-45ff-8208-3f68088abb82/terraform test_working_directory=/tmp/plugintest2838451337
2025-07-01T00:30:12.7908470Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T00:30:12.7910333Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T00:30:12.7912081Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T00:30:13.0643764Z   
2025-07-01T00:30:13.0645011Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T00:30:13.0645844Z         
2025-07-01T00:30:13.0646896Z         Error: error deleting a flex cluster (68632c088f2a6336ca1cfa6a): test-acc-tf-4288310635442408792
2025-07-01T00:30:13.0647721Z         
2025-07-01T00:30:13.0649131Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632c088f2a6336ca1cfa6a/flexClusters/test-acc-tf-4288310635442408792
2025-07-01T00:30:13.0650417Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-01T00:30:13.0651035Z         Reason: Cannot terminate cluster test-acc-tf-4288310635442408792 in group
2025-07-01T00:30:13.0651664Z         68632c088f2a6336ca1cfa6a because termination protection is enabled. Disable
2025-07-01T00:30:13.0652304Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-01T00:30:13.0652862Z         terminate cluster test-acc-tf-4288310635442408792 in group
2025-07-01T00:30:13.0653436Z         68632c088f2a6336ca1cfa6a because termination protection is enabled. Disable
2025-07-01T00:30:13.0654264Z         termination protection and try again.], BadRequestDetail: 
2025-07-01T00:30:13.0654885Z --- FAIL: TestAccFlexClusterRS_basic (12.88s)
```
#### PASS 49 seconds
#### PASS 52 seconds
#### PASS 52 seconds
#### PASS a minute
#### FAIL 13 seconds
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:36.548000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='7 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-01T08:33:36.5488657Z === RUN   TestAccFlexClusterRS_basic
2025-07-01T08:33:36.5491305Z     resource_test.go:19: Creating execution project: test-acc-tf-p-1785466340546726613
2025-07-01T08:33:50.2902976Z   
2025-07-01T08:33:50.2905106Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:33:50.2907425Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-01T08:33:50.2909203Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-01T08:33:50.5135500Z   
2025-07-01T08:33:50.5136033Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-01T08:33:50.5136466Z         
2025-07-01T08:33:50.5137001Z         Error: error deleting a flex cluster (68639d6090ed24487dfd467a): test-acc-tf-7054316069849528213
2025-07-01T08:33:50.5137719Z         
2025-07-01T08:33:50.5138420Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68639d6090ed24487dfd467a/flexClusters/test-acc-tf-7054316069849528213
2025-07-01T08:33:50.5139196Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-01T08:33:50.5139795Z         Reason: Cannot terminate cluster test-acc-tf-7054316069849528213 in group
2025-07-01T08:33:50.5140421Z         68639d6090ed24487dfd467a because termination protection is enabled. Disable
2025-07-01T08:33:50.5141056Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-01T08:33:50.5141609Z         terminate cluster test-acc-tf-7054316069849528213 in group
2025-07-01T08:33:50.5142177Z         68639d6090ed24487dfd467a because termination protection is enabled. Disable
2025-07-01T08:33:50.5142940Z         termination protection and try again.], BadRequestDetail: 
2025-07-01T08:33:50.5143311Z --- FAIL: TestAccFlexClusterRS_basic (13.96s)
```
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### FAIL 24 seconds
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-04T00:29:00.962000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='4 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-04T00:29:00.9624978Z === RUN   TestAccFlexClusterRS_basic
2025-07-04T00:29:00.9626317Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3285181739207567139
2025-07-04T00:29:25.1992871Z   
2025-07-04T00:29:25.1994646Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-04T00:29:25.1995855Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-04T00:29:25.1996847Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-04T00:29:25.5713396Z    test_name=TestAccFlexClusterRS_basic
2025-07-04T00:29:25.5714569Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-04T00:29:25.5715375Z         
2025-07-04T00:29:25.5716466Z         Error: error deleting a flex cluster (6867204d579d4c1b1e7acbac): test-acc-tf-6033897913351790890
2025-07-04T00:29:25.5717236Z         
2025-07-04T00:29:25.5718524Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6867204d579d4c1b1e7acbac/flexClusters/test-acc-tf-6033897913351790890
2025-07-04T00:29:25.5719950Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-04T00:29:25.5721020Z         Reason: Cannot terminate cluster test-acc-tf-6033897913351790890 in group
2025-07-04T00:29:25.5722176Z         6867204d579d4c1b1e7acbac because termination protection is enabled. Disable
2025-07-04T00:29:25.5723488Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-04T00:29:25.5724514Z         terminate cluster test-acc-tf-6033897913351790890 in group
2025-07-04T00:29:25.5725560Z         6867204d579d4c1b1e7acbac because termination protection is enabled. Disable
2025-07-04T00:29:25.5726855Z         termination protection and try again.], BadRequestDetail: 
2025-07-04T00:29:25.5727533Z --- FAIL: TestAccFlexClusterRS_basic (24.61s)
```
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### PASS 59 seconds
### 2025-07-07
#### PASS 59 seconds
### 2025-07-08
#### PASS 58 seconds
### 2025-07-09
#### FAIL 13 seconds
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-09T00:29:44.920000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='19 minutes ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-07-09T00:29:44.9201413Z === RUN   TestAccFlexClusterRS_basic
2025-07-09T00:29:44.9202623Z     resource_test.go:19: Creating execution project: test-acc-tf-p-5233511536671021168
2025-07-09T00:29:58.4906179Z    test_working_directory=/tmp/plugintest207267299 test_terraform_path=/home/runner/work/_temp/722a8bcd-5d81-437b-b4d2-291ca2ec5f73/terraform test_step_number=1 test_name=TestAccFlexClusterRS_basic
2025-07-09T00:29:58.4909250Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-09T00:29:58.4911194Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-09T00:29:58.7221888Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-09T00:29:58.7289993Z    test_name=TestAccFlexClusterRS_basic
2025-07-09T00:29:58.7291209Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-09T00:29:58.7292069Z         
2025-07-09T00:29:58.7293148Z         Error: error deleting a flex cluster (686db7f9725a79527bea6413): test-acc-tf-7040727193647985855
2025-07-09T00:29:58.7294034Z         
2025-07-09T00:29:58.7295111Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686db7f9725a79527bea6413/flexClusters/test-acc-tf-7040727193647985855
2025-07-09T00:29:58.7295966Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-09T00:29:58.7296705Z         Reason: Cannot terminate cluster test-acc-tf-7040727193647985855 in group
2025-07-09T00:29:58.7297474Z         686db7f9725a79527bea6413 because termination protection is enabled. Disable
2025-07-09T00:29:58.7298249Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-09T00:29:58.7298927Z         terminate cluster test-acc-tf-7040727193647985855 in group
2025-07-09T00:29:58.7299631Z         686db7f9725a79527bea6413 because termination protection is enabled. Disable
2025-07-09T00:29:58.7300521Z         termination protection and try again.], BadRequestDetail: 
2025-07-09T00:29:58.7301058Z --- FAIL: TestAccFlexClusterRS_basic (13.81s)
```