# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 27) FAIL(x 10)
Success rate: 72.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 00:30](#error-2025-07-01t0030000000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 12.09s
[2025-07-01 08:33](#error-2025-07-01t0833360000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 13.10s
[2025-07-04 00:29](#error-2025-07-04t0029000000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 24.06s
[2025-07-09 00:29](#error-2025-07-09t0029440000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 13.08s
[2025-07-14 00:31](#error-2025-07-14t0031090000) |  | dev | timeout | 10803.05s
[2025-07-15 00:30](#error-2025-07-15t0030060000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6875a10eadc41f7b92bfac41/flexClusters/test-acc-tf-8291059729420889925 | dev |  | 15.01s
[2025-07-17 00:30](#error-2025-07-17t0030110000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68784413de3dfe20a0f4a701/flexClusters/test-acc-tf-4740646606494196895 | dev |  | 13.08s
[2025-07-18 00:29](#error-2025-07-18t0029450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68799579e2cb8d27fbfbbf8f/flexClusters/test-acc-tf-4428863965891622885 | dev |  | 7.05s
[2025-07-20 00:33](#error-2025-07-20t0033000000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/687c393c426db7026b5b1b94/flexClusters/test-acc-tf-3579074534405682058 | qa |  | 6.07s
[2025-07-26 00:29](#error-2025-07-26t0029230000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68842163a8aaac041ec4e58e/flexClusters/test-acc-tf-289780521127755341 | dev | flaky_500 | 13.10s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - FAIL 12 seconds

### Error 2025-07-01T00:30:00+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-01T00:30:00.183000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='29 days ago')
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

  - PASS 49 seconds
  - PASS 52 seconds
  - PASS 52 seconds
  - PASS a minute
  - FAIL 13 seconds

### Error 2025-07-01T08:33:36+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-07-01T08:33:36.548000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='29 days ago')
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

- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04

### Error 2025-07-04T00:29:00+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-04T00:29:00.962000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='26 days ago')
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

- 2025-07-05 PASS a minute
- 2025-07-06 PASS 59 seconds
- 2025-07-07 PASS 59 seconds
- 2025-07-08 PASS 58 seconds
- 2025-07-09

### Error 2025-07-09T00:29:44+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-09T00:29:44.920000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='21 days ago')
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

- 2025-07-10
  - PASS a minute
  - PASS a minute
- 2025-07-11 PASS 16 minutes
- 2025-07-12 PASS 49 seconds
- 2025-07-13 PASS 59 seconds
- 2025-07-14

### Error 2025-07-14T00:31:09+00:00
```
2025-07-14T00:31:09.1776922Z === RUN   TestAccFlexClusterRS_basic
2025-07-14T00:31:09.1779673Z     resource_test.go:19: Creating execution project: test-acc-tf-p-5088880776129086543
2025-07-14T03:31:12.6092783Z    test_terraform_path=/home/runner/work/_temp/00a3cfb5-5935-4d75-a076-a5c21959b7f2/terraform test_working_directory=/tmp/plugintest2098013986 test_name=TestAccFlexClusterRS_basic
2025-07-14T03:31:12.6094933Z     resource_test.go:21: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:31:12.6095547Z         
2025-07-14T03:31:12.6096784Z         Error: error creating flex cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:12.6097468Z         
2025-07-14T03:31:12.6097918Z           with mongodbatlas_flex_cluster.test,
2025-07-14T03:31:12.6098933Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-07-14T03:31:12.6099896Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-07-14T03:31:12.6100207Z         
2025-07-14T03:31:12.6100769Z         Name: test-acc-tf-4775898618504146421, Project ID: 68744fcdd81a2d4bb4ea416c
2025-07-14T03:31:12.6603753Z --- FAIL: TestAccFlexClusterRS_basic (10803.48s)
```

- 2025-07-15

### Error 2025-07-15T00:30:06+00:00
```
2025-07-15T00:30:06.3083780Z === RUN   TestAccFlexClusterRS_basic
2025-07-15T00:30:06.3084917Z     resource_test.go:19: Creating execution project: test-acc-tf-p-2179749409510441845
2025-07-15T00:30:21.1391072Z    test_terraform_path=/home/runner/work/_temp/e6703365-437c-493b-bc55-4f95f57ab897/terraform test_working_directory=/tmp/plugintest1172859085 test_name=TestAccFlexClusterRS_basic
2025-07-15T00:30:21.1394121Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T00:30:21.1396167Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-15T00:30:21.1398106Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-15T00:30:21.3737280Z    test_terraform_path=/home/runner/work/_temp/e6703365-437c-493b-bc55-4f95f57ab897/terraform test_working_directory=/tmp/plugintest1172859085
2025-07-15T00:30:21.3738222Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-15T00:30:21.3738659Z         
2025-07-15T00:30:21.3739210Z         Error: error deleting a flex cluster (6875a10eadc41f7b92bfac41): test-acc-tf-8291059729420889925
2025-07-15T00:30:21.3739643Z         
2025-07-15T00:30:21.3740346Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6875a10eadc41f7b92bfac41/flexClusters/test-acc-tf-8291059729420889925
2025-07-15T00:30:21.3741135Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-15T00:30:21.3741737Z         Reason: Cannot terminate cluster test-acc-tf-8291059729420889925 in group
2025-07-15T00:30:21.3742617Z         6875a10eadc41f7b92bfac41 because termination protection is enabled. Disable
2025-07-15T00:30:21.3743282Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-15T00:30:21.3743841Z         terminate cluster test-acc-tf-8291059729420889925 in group
2025-07-15T00:30:21.3744421Z         6875a10eadc41f7b92bfac41 because termination protection is enabled. Disable
2025-07-15T00:30:21.3745265Z         termination protection and try again.], BadRequestDetail: 
2025-07-15T00:30:21.3745654Z --- FAIL: TestAccFlexClusterRS_basic (15.06s)
```

- 2025-07-16 PASS 49 seconds
- 2025-07-17

### Error 2025-07-17T00:30:11+00:00
```
2025-07-17T00:30:11.6436376Z === RUN   TestAccFlexClusterRS_basic
2025-07-17T00:30:11.6438670Z     resource_test.go:19: Creating execution project: test-acc-tf-p-8332034178149542211
2025-07-17T00:30:25.2622725Z    test_working_directory=/tmp/plugintest3211342617 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/084fd92d-a0b6-4e9b-88ec-f364cb8cc240/terraform test_step_number=1
2025-07-17T00:30:25.2625134Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-17T00:30:25.2626937Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-17T00:30:25.2628547Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-17T00:30:25.4828994Z   
2025-07-17T00:30:25.4830166Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-17T00:30:25.4830999Z         
2025-07-17T00:30:25.4832050Z         Error: error deleting a flex cluster (68784413de3dfe20a0f4a701): test-acc-tf-4740646606494196895
2025-07-17T00:30:25.4832614Z         
2025-07-17T00:30:25.4833324Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68784413de3dfe20a0f4a701/flexClusters/test-acc-tf-4740646606494196895
2025-07-17T00:30:25.4834113Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-17T00:30:25.4834698Z         Reason: Cannot terminate cluster test-acc-tf-4740646606494196895 in group
2025-07-17T00:30:25.4835335Z         68784413de3dfe20a0f4a701 because termination protection is enabled. Disable
2025-07-17T00:30:25.4835970Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-17T00:30:25.4836517Z         terminate cluster test-acc-tf-4740646606494196895 in group
2025-07-17T00:30:25.4837093Z         68784413de3dfe20a0f4a701 because termination protection is enabled. Disable
2025-07-17T00:30:25.4837855Z         termination protection and try again.], BadRequestDetail: 
2025-07-17T00:30:25.4838251Z --- FAIL: TestAccFlexClusterRS_basic (13.84s)
```

- 2025-07-18

### Error 2025-07-18T00:29:45+00:00
```
2025-07-18T00:29:45.6215938Z === RUN   TestAccFlexClusterRS_basic
2025-07-18T00:29:45.6217894Z     resource_test.go:19: Creating execution project: test-acc-tf-p-7309717322399327923
2025-07-18T00:29:52.8427127Z    test_working_directory=/tmp/plugintest857893224 test_step_number=1 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/f60c7ca9-a0c3-47cb-ac56-b27834b250cd/terraform
2025-07-18T00:29:52.8430696Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-18T00:29:52.8432675Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-18T00:29:52.8434266Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-18T00:29:53.0822508Z   
2025-07-18T00:29:53.0823051Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-18T00:29:53.0823491Z         
2025-07-18T00:29:53.0824034Z         Error: error deleting a flex cluster (68799579e2cb8d27fbfbbf8f): test-acc-tf-4428863965891622885
2025-07-18T00:29:53.0824497Z         
2025-07-18T00:29:53.0825200Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68799579e2cb8d27fbfbbf8f/flexClusters/test-acc-tf-4428863965891622885
2025-07-18T00:29:53.0825991Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-18T00:29:53.0826583Z         Reason: Cannot terminate cluster test-acc-tf-4428863965891622885 in group
2025-07-18T00:29:53.0827207Z         68799579e2cb8d27fbfbbf8f because termination protection is enabled. Disable
2025-07-18T00:29:53.0828059Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-18T00:29:53.0828619Z         terminate cluster test-acc-tf-4428863965891622885 in group
2025-07-18T00:29:53.0829190Z         68799579e2cb8d27fbfbbf8f because termination protection is enabled. Disable
2025-07-18T00:29:53.0830002Z         termination protection and try again.], BadRequestDetail: 
2025-07-18T00:29:53.0830390Z --- FAIL: TestAccFlexClusterRS_basic (7.46s)
```

- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:33:00+00:00
```
2025-07-20T00:33:00.3431492Z === RUN   TestAccFlexClusterRS_basic
2025-07-20T00:33:00.3435589Z     resource_test.go:19: Creating execution project: test-acc-tf-p-8145610278527366669
2025-07-20T00:33:06.7400628Z   
2025-07-20T00:33:06.7402567Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-20T00:33:06.7403937Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-20T00:33:06.7405352Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-20T00:33:06.9976284Z    test_terraform_path=/home/runner/work/_temp/6de8480f-e734-420e-8a48-70bdaeb77b43/terraform test_name=TestAccFlexClusterRS_basic test_working_directory=/tmp/plugintest3929895379
2025-07-20T00:33:06.9978139Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-20T00:33:06.9979137Z         
2025-07-20T00:33:06.9980126Z         Error: error deleting a flex cluster (687c393c426db7026b5b1b94): test-acc-tf-3579074534405682058
2025-07-20T00:33:06.9980914Z         
2025-07-20T00:33:06.9982253Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393c426db7026b5b1b94/flexClusters/test-acc-tf-3579074534405682058
2025-07-20T00:33:06.9983699Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-20T00:33:06.9984792Z         Reason: Cannot terminate cluster test-acc-tf-3579074534405682058 in group
2025-07-20T00:33:06.9985912Z         687c393c426db7026b5b1b94 because termination protection is enabled. Disable
2025-07-20T00:33:06.9987077Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-20T00:33:06.9988076Z         terminate cluster test-acc-tf-3579074534405682058 in group
2025-07-20T00:33:06.9989268Z         687c393c426db7026b5b1b94 because termination protection is enabled. Disable
2025-07-20T00:33:06.9990572Z         termination protection and try again.], BadRequestDetail: 
2025-07-20T00:33:06.9991243Z --- FAIL: TestAccFlexClusterRS_basic (6.65s)
```

- 2025-07-21 PASS 52 seconds
- 2025-07-22 PASS 58 seconds
- 2025-07-23
  - PASS a minute
  - PASS 51 seconds
- 2025-07-24 PASS 59 seconds
- 2025-07-25 PASS 49 seconds
- 2025-07-26

### Error 2025-07-26T00:29:23+00:00
```
2025-07-26T00:29:23.2045458Z === RUN   TestAccFlexClusterRS_basic
2025-07-26T00:29:23.2047958Z     resource_test.go:19: Creating execution project: test-acc-tf-p-5283500376895970731
2025-07-26T00:29:36.9057213Z    test_terraform_path=/home/runner/work/_temp/46ffc852-27c1-400a-aaf1-db23f6d87d1e/terraform
2025-07-26T00:29:36.9059467Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-26T00:29:36.9061349Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-07-26T00:29:36.9063416Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-07-26T00:29:37.1721565Z    test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/46ffc852-27c1-400a-aaf1-db23f6d87d1e/terraform
2025-07-26T00:29:37.1723450Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-26T00:29:37.1724251Z         
2025-07-26T00:29:37.1725295Z         Error: error deleting a flex cluster (68842163a8aaac041ec4e58e): test-acc-tf-289780521127755341
2025-07-26T00:29:37.1726092Z         
2025-07-26T00:29:37.1727272Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68842163a8aaac041ec4e58e/flexClusters/test-acc-tf-289780521127755341
2025-07-26T00:29:37.1728094Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-07-26T00:29:37.1728686Z         Reason: Cannot terminate cluster test-acc-tf-289780521127755341 in group
2025-07-26T00:29:37.1729303Z         68842163a8aaac041ec4e58e because termination protection is enabled. Disable
2025-07-26T00:29:37.1729960Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-07-26T00:29:37.1730513Z         terminate cluster test-acc-tf-289780521127755341 in group
2025-07-26T00:29:37.1731099Z         68842163a8aaac041ec4e58e because termination protection is enabled. Disable
2025-07-26T00:29:37.1732039Z         termination protection and try again.], BadRequestDetail: 
2025-07-26T00:29:37.1732421Z --- FAIL: TestAccFlexClusterRS_basic (13.97s)
```

- 2025-07-27 PASS 52 seconds
- 2025-07-28 PASS 59 seconds
- 2025-07-29 PASS 48 seconds
- 2025-07-30 PASS 49 seconds