# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 103) FAIL(x 12) TIMEOUT(x 2)
Success rate: 89.57%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-05-24 05:27 | dev | 16332.00s
2025-05-31 04:18 | dev | 11728.01s
2025-06-01 04:20 | dev | 11660.01s
2025-06-01 08:29 | dev | 11682.06s
2025-06-01 12:36 | dev | 11565.04s
2025-06-01 16:46 | dev | 11640.04s
2025-06-01 20:56 | dev | 11600.03s
2025-06-02 01:07 | dev | 11807.00s
2025-06-02 04:19 | dev | 11655.08s
2025-06-02 05:16 | dev | 11584.09s
2025-06-02 09:30 | dev | 11746.04s
2025-06-05 00:35 | dev | 25.09s
2025-06-06 05:30 | dev | 16087.00s

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
#### PASS an hour
### 2025-04-11
#### PASS 53 minutes
### 2025-04-12
#### PASS 48 minutes
### 2025-04-13
#### PASS an hour
### 2025-04-14
#### PASS 46 minutes
### 2025-04-15
#### PASS 57 minutes
### 2025-04-16
#### PASS 48 minutes
#### PASS an hour
### 2025-04-17
#### PASS 52 minutes
### 2025-04-18
#### PASS 48 minutes
### 2025-04-19
#### PASS 50 minutes
### 2025-04-20
#### PASS 56 minutes
### 2025-04-21
#### PASS 56 minutes
### 2025-04-22
#### PASS 53 minutes
### 2025-04-23
#### PASS 54 minutes
### 2025-04-24
#### PASS 47 minutes
### 2025-04-25
#### PASS 52 minutes
### 2025-04-26
#### PASS 52 minutes
### 2025-04-27
#### PASS an hour
### 2025-04-28
#### PASS 53 minutes
### 2025-04-29
#### PASS 51 minutes
### 2025-04-30
#### PASS 58 minutes
### 2025-05-01
#### PASS 49 minutes
#### PASS 49 minutes
#### PASS 54 minutes
#### PASS 48 minutes
#### PASS 50 minutes
#### PASS 50 minutes
#### PASS 49 minutes
### 2025-05-02
#### PASS 56 minutes
### 2025-05-03
#### PASS 54 minutes
### 2025-05-04
#### PASS 53 minutes
### 2025-05-05
#### PASS 50 minutes
### 2025-05-06
#### PASS 52 minutes
### 2025-05-07
#### PASS 50 minutes
### 2025-05-08
#### PASS 52 minutes
### 2025-05-09
#### PASS 56 minutes
### 2025-05-10
#### PASS 53 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7783064Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:01.7783440Z     shared_resource.go:84: 
2025-05-11T00:30:01.7784305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7786023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7787752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7789466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7791602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:189
2025-05-11T00:30:01.7793671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:183
2025-05-11T00:30:01.7794474Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7795325Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7795936Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:01.7797107Z         	Messages:   	Project creation failed: test-acc-tf-p-7288638795720156200, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7797875Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (0.02s)
```
### 2025-05-12
#### PASS 52 minutes
### 2025-05-13
#### PASS 52 minutes
#### PASS 50 minutes
### 2025-05-14
#### PASS 58 minutes
### 2025-05-15
#### PASS 49 minutes
### 2025-05-16
#### PASS 49 minutes
### 2025-05-17
#### PASS 47 minutes
### 2025-05-18
#### PASS 55 minutes
### 2025-05-19
#### PASS 51 minutes
### 2025-05-20
#### PASS 47 minutes
### 2025-05-21
#### PASS 54 minutes
#### PASS 50 minutes
### 2025-05-22
#### PASS 47 minutes
### 2025-05-23
#### PASS 50 minutes
### 2025-05-24
#### TIMEOUT 4 hours
```
2025-05-24T05:27:39.5398090Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-24T05:27:39.5500402Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-24T05:27:39.5565517Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-24T05:27:39.5566434Z     pre_check.go:40: Time before creating cluster: 2025-05-24T00:56:37.59934083Z, ProjectID: 6831127d3beb166e70247748, Cluster name: test-acc-tf-c-4471846943475353747
2025-05-24T05:27:39.5641343Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-24T05:27:39.5642111Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-05-24T05:27:39.5642537Z         
2025-05-24T05:27:39.5642793Z         Error: Error in update
2025-05-24T05:27:39.5643034Z         
2025-05-24T05:27:39.5643362Z           with mongodbatlas_advanced_cluster.test,
2025-05-24T05:27:39.5644019Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-24T05:27:39.5644609Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-24T05:27:39.5645020Z         
2025-05-24T05:27:39.5645483Z         cluster=test-acc-tf-c-4471846943475353747 didn't reach desired state: IDLE,
2025-05-24T05:27:39.5646102Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-24T05:27:39.5646531Z         'UPDATING', timeout: 3h0m0s)
2025-05-24T05:27:39.5655708Z    test_terraform_path=/home/runner/work/_temp/dc3b0bbf-8bb7-4dd2-8e35-9df6ef18c6f4/terraform test_working_directory=/tmp/plugintest805994804 test_step_number=3 test_name=TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-24T05:27:39.5663159Z 	running tests:
2025-05-24T05:27:39.5663596Z 		TestAccAdvancedCluster_removeBlocksFromConfig (4h32m12s)
2025-05-24T05:27:39.5664093Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h32m12s)
```
### 2025-05-25
#### PASS 57 minutes
### 2025-05-26
#### PASS 48 minutes
### 2025-05-27
#### PASS 50 minutes
### 2025-05-28
#### PASS 47 minutes
#### PASS an hour
#### PASS 57 minutes
### 2025-05-29
#### PASS 58 minutes
### 2025-05-30
#### PASS 2 hours
#### PASS 56 minutes
### 2025-05-31
#### FAIL 3 hours
```
2025-05-31T04:18:53.2221688Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2289128Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2338140Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2339267Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:04:13.800461079Z, ProjectID: 683a4f396980316aa7db81ba, Cluster name: test-acc-tf-c-4522045413215159369
2025-05-31T04:18:53.2425570Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:18:53.2426257Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-05-31T04:18:53.2426668Z         
2025-05-31T04:18:53.2426918Z         Error: Error in update
2025-05-31T04:18:53.2427161Z         
2025-05-31T04:18:53.2427478Z           with mongodbatlas_advanced_cluster.test,
2025-05-31T04:18:53.2428119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-31T04:18:53.2428821Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-31T04:18:53.2429123Z         
2025-05-31T04:18:53.2429572Z         cluster=test-acc-tf-c-4522045413215159369 didn't reach desired state: IDLE,
2025-05-31T04:18:53.2430183Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-31T04:18:53.2430605Z         'UPDATING', timeout: 3h0m0s)
2025-05-31T04:18:53.2431002Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11728.11s)
```
### 2025-06-01
#### FAIL 3 hours
```
2025-06-01T04:20:15.0511828Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0583640Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0639879Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0640745Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:06:50.05543396Z, ProjectID: 683ba1a84e6c592331c555d4, Cluster name: test-acc-tf-c-495592106466311457
2025-06-01T04:20:15.0731390Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:20:15.0732012Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T04:20:15.0732601Z         
2025-06-01T04:20:15.0732901Z         Error: Error in update
2025-06-01T04:20:15.0733158Z         
2025-06-01T04:20:15.0733495Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T04:20:15.0734431Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T04:20:15.0735057Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T04:20:15.0735385Z         
2025-06-01T04:20:15.0735842Z         cluster=test-acc-tf-c-495592106466311457 didn't reach desired state: IDLE,
2025-06-01T04:20:15.0736454Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-01T04:20:15.0736896Z         'UPDATING', timeout: 3h0m0s)
2025-06-01T04:20:15.0737305Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11660.13s)
```
#### FAIL 3 hours
```
2025-06-01T08:29:24.1306402Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1366014Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1437895Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1438785Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:15:32.463236429Z, ProjectID: 683bdbfc7bf9cf70212c2929, Cluster name: test-acc-tf-c-7501460105857570064
2025-06-01T08:29:24.1519276Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:29:24.1519892Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T08:29:24.1520316Z         
2025-06-01T08:29:24.1520576Z         Error: Error in update
2025-06-01T08:29:24.1520834Z         
2025-06-01T08:29:24.1521172Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T08:29:24.1522054Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T08:29:24.1522655Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T08:29:24.1522972Z         
2025-06-01T08:29:24.1523433Z         cluster=test-acc-tf-c-7501460105857570064 didn't reach desired state: IDLE,
2025-06-01T08:29:24.1524059Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-01T08:29:24.1524494Z         'UPDATING', timeout: 3h0m0s)
2025-06-01T08:29:24.1524903Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11682.59s)
```
#### FAIL 3 hours
```
2025-06-01T12:36:46.3860888Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3929093Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3994073Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.3994945Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:24:26.893335136Z, ProjectID: 683c16597bf9cf70212cc381, Cluster name: test-acc-tf-c-4275848488827735000
2025-06-01T12:36:46.4083089Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:36:46.4083692Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T12:36:46.4084107Z         
2025-06-01T12:36:46.4084356Z         Error: Error in update
2025-06-01T12:36:46.4084605Z         
2025-06-01T12:36:46.4084929Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T12:36:46.4085775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T12:36:46.4086527Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T12:36:46.4086836Z         
2025-06-01T12:36:46.4087286Z         cluster=test-acc-tf-c-4275848488827735000 didn't reach desired state: IDLE,
2025-06-01T12:36:46.4087900Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-01T12:36:46.4088326Z         'UPDATING', timeout: 3h0m0s)
2025-06-01T12:36:46.4088727Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11565.44s)
```
#### FAIL 3 hours
```
2025-06-01T16:46:33.8299300Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8354930Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8406183Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8407232Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:32:44.6377306Z, ProjectID: 683c50c6cc8f0935c7c290d2, Cluster name: test-acc-tf-c-1824032882570781851
2025-06-01T16:46:33.8512540Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:46:33.8513147Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T16:46:33.8513581Z         
2025-06-01T16:46:33.8513840Z         Error: Error in update
2025-06-01T16:46:33.8514090Z         
2025-06-01T16:46:33.8514424Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T16:46:33.8515081Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T16:46:33.8516000Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T16:46:33.8516319Z         
2025-06-01T16:46:33.8516782Z         cluster=test-acc-tf-c-1824032882570781851 didn't reach desired state: IDLE,
2025-06-01T16:46:33.8517405Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-01T16:46:33.8517842Z         'UPDATING', timeout: 3h0m0s)
2025-06-01T16:46:33.8518258Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11640.38s)
```
#### FAIL 3 hours
```
2025-06-01T20:56:30.1301051Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1406438Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1467530Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1468438Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:43:35.506631546Z, ProjectID: 683c8b38cc8f0935c7c2ff49, Cluster name: test-acc-tf-c-3857436387761360886
2025-06-01T20:56:30.1560300Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:56:30.1560915Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T20:56:30.1561349Z         
2025-06-01T20:56:30.1561611Z         Error: Error in update
2025-06-01T20:56:30.1561984Z         
2025-06-01T20:56:30.1562321Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T20:56:30.1562987Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T20:56:30.1563601Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T20:56:30.1563922Z         
2025-06-01T20:56:30.1564389Z         cluster=test-acc-tf-c-3857436387761360886 didn't reach desired state: IDLE,
2025-06-01T20:56:30.1565032Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-01T20:56:30.1565476Z         'UPDATING', timeout: 3h0m0s)
2025-06-01T20:56:30.1566033Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11600.34s)
```
### 2025-06-02
#### FAIL 3 hours
```
2025-06-02T01:07:47.7465155Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7532662Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7632227Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7633803Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:52:03.823136443Z, ProjectID: 683cc56f7bf9cf70212e05d1, Cluster name: test-acc-tf-c-6388307951860852079
2025-06-02T01:07:47.7771065Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:07:47.7772110Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T01:07:47.7772831Z         
2025-06-02T01:07:47.7773256Z         Error: Error in update
2025-06-02T01:07:47.7773669Z         
2025-06-02T01:07:47.7774236Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T01:07:47.7775373Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T01:07:47.7776424Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T01:07:47.7776965Z         
2025-06-02T01:07:47.7777926Z         cluster=test-acc-tf-c-6388307951860852079 didn't reach desired state: IDLE,
2025-06-02T01:07:47.7778979Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-02T01:07:47.7779724Z         'UPDATING', timeout: 3h0m0s)
2025-06-02T01:07:47.7780415Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11807.02s)
```
#### FAIL 3 hours
```
2025-06-02T04:19:30.0955642Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1020488Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1076470Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1077461Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:05:53.499330224Z, ProjectID: 683cf2bd7bf9cf70212e5a02, Cluster name: test-acc-tf-c-7665275283412016676
2025-06-02T04:19:30.1168863Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:19:30.1169459Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T04:19:30.1169879Z         
2025-06-02T04:19:30.1170133Z         Error: Error in update
2025-06-02T04:19:30.1170388Z         
2025-06-02T04:19:30.1170711Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T04:19:30.1171352Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T04:19:30.1171953Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T04:19:30.1172266Z         
2025-06-02T04:19:30.1172718Z         cluster=test-acc-tf-c-7665275283412016676 didn't reach desired state: IDLE,
2025-06-02T04:19:30.1173334Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-02T04:19:30.1173766Z         'UPDATING', timeout: 3h0m0s)
2025-06-02T04:19:30.1174174Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11655.76s)
```
#### FAIL 3 hours
```
2025-06-02T05:16:34.1915013Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.1969120Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.2015629Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.2016740Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:03:40.194409189Z, ProjectID: 683cffd3cc8f0935c7c40f01, Cluster name: test-acc-tf-c-595977830587736954
2025-06-02T05:16:34.2128479Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:16:34.2129079Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T05:16:34.2129502Z         
2025-06-02T05:16:34.2129754Z         Error: Error in update
2025-06-02T05:16:34.2130374Z         
2025-06-02T05:16:34.2130713Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T05:16:34.2131368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T05:16:34.2131979Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T05:16:34.2132291Z         
2025-06-02T05:16:34.2132749Z         cluster=test-acc-tf-c-595977830587736954 didn't reach desired state: IDLE,
2025-06-02T05:16:34.2133372Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-02T05:16:34.2133804Z         'UPDATING', timeout: 3h0m0s)
2025-06-02T05:16:34.2134220Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11584.86s)
```
#### FAIL 3 hours
```
2025-06-02T09:30:51.2515619Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2657265Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2737289Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2738165Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:16:00.856843689Z, ProjectID: 683d3b9bcc8f0935c7c486ab, Cluster name: test-acc-tf-c-990100721943414754
2025-06-02T09:30:51.2817678Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:30:51.2818296Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T09:30:51.2818879Z         
2025-06-02T09:30:51.2819147Z         Error: Error in update
2025-06-02T09:30:51.2819479Z         
2025-06-02T09:30:51.2819872Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T09:30:51.2820828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T09:30:51.2821551Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T09:30:51.2821960Z         
2025-06-02T09:30:51.2822494Z         cluster=test-acc-tf-c-990100721943414754 didn't reach desired state: IDLE,
2025-06-02T09:30:51.2823236Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-06-02T09:30:51.2823808Z         'UPDATING', timeout: 3h0m0s)
2025-06-02T09:30:51.2824227Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11746.41s)
```
### 2025-06-03
#### PASS 54 minutes
### 2025-06-04
#### PASS 55 minutes
### 2025-06-05
#### FAIL 25 seconds
```
2025-06-05T00:35:38.5873022Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.5946889Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6686677Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:38.6687303Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:51.011968826Z, ProjectID: 6840e4c7161ca93c1f052870, Cluster name: test-acc-tf-c-555255435232822287
2025-06-05T00:35:38.6693114Z   
2025-06-05T00:35:38.6693460Z     resource_advanced_cluster_test.go:186: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6693560Z         
2025-06-05T00:35:38.6693712Z         Error: Error in create
2025-06-05T00:35:38.6693797Z         
2025-06-05T00:35:38.6694022Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6694470Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6694737Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6694832Z         
2025-06-05T00:35:38.6695147Z         cluster name: test-acc-tf-c-555255435232822287, API error details:
2025-06-05T00:35:38.6695557Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters
2025-06-05T00:35:38.6695916Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6696207Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6696341Z         BadRequestDetail: 
2025-06-05T00:35:38.6696559Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (25.91s)
```
### 2025-06-06
#### TIMEOUT 4 hours
```
2025-06-06T05:30:18.8724001Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8831721Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8922059Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-06T05:30:18.8923637Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:02:51.386392261Z, ProjectID: 6842369dc64ff333daf68f56, Cluster name: test-acc-tf-c-3090516483289871116
2025-06-06T05:30:18.9059177Z panic: test timed out after 5h0m0s
2025-06-06T05:30:18.9059575Z 	running tests:
2025-06-06T05:30:18.9060127Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h28m7s)
```
### 2025-06-07
#### PASS 53 minutes
### 2025-06-08
#### PASS 51 minutes
### 2025-06-09
#### PASS 59 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 54 minutes
#### PASS an hour
### 2025-06-12
#### PASS 55 minutes
### 2025-06-13
#### PASS 55 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 55 minutes
### 2025-06-16
#### PASS an hour
### 2025-06-17
#### PASS 58 minutes
### 2025-06-18
#### PASS 56 minutes
#### PASS 52 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 47 minutes
### 2025-06-21
#### PASS 48 minutes
### 2025-06-22
#### PASS 56 minutes
### 2025-06-23
#### PASS 50 minutes
### 2025-06-24
#### PASS an hour
### 2025-06-25
#### PASS 48 minutes
### 2025-06-26
#### PASS 55 minutes
#### PASS 46 minutes
### 2025-06-27
#### PASS an hour
### 2025-06-28
#### PASS 47 minutes
### 2025-06-29
#### PASS 58 minutes
### 2025-06-30
#### PASS 52 minutes
### 2025-07-01
#### PASS 48 minutes
#### PASS 50 minutes
#### PASS 52 minutes
#### PASS 47 minutes
#### PASS 53 minutes
### 2025-07-02
#### PASS 50 minutes
### 2025-07-03
#### PASS 49 minutes
### 2025-07-04
#### PASS 53 minutes
### 2025-07-05
#### PASS 55 minutes
### 2025-07-06
#### PASS 50 minutes
### 2025-07-07
#### PASS 50 minutes
### 2025-07-08
#### PASS 56 minutes
### 2025-07-09
#### PASS 49 minutes