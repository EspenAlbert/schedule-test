# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 103) FAIL(x 12) TIMEOUT
Success rate: 89.57%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-07 00:57 | dev | 16178.00s
2025-05-11 00:30 | qa | 0.01s
2025-05-31 01:05 | dev | 11588.08s
2025-06-01 01:08 | dev | 11723.03s
2025-06-01 05:17 | dev | 11728.04s
2025-06-01 09:27 | dev | 11700.01s
2025-06-01 13:36 | dev | 11717.02s
2025-06-01 17:45 | dev | 11667.03s
2025-06-01 21:52 | dev | 11768.04s
2025-06-02 01:06 | dev | 11829.05s
2025-06-02 02:05 | dev | 11894.08s
2025-06-02 06:18 | dev | 11700.01s
2025-06-05 00:35 | dev | 189.09s

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
#### PASS 52 minutes
### 2025-04-13
#### PASS an hour
### 2025-04-14
#### PASS 50 minutes
### 2025-04-15
#### PASS an hour
### 2025-04-16
#### PASS 52 minutes
#### PASS an hour
### 2025-04-17
#### PASS 52 minutes
### 2025-04-18
#### PASS 53 minutes
### 2025-04-19
#### PASS 51 minutes
### 2025-04-20
#### PASS 59 minutes
### 2025-04-21
#### PASS 57 minutes
### 2025-04-22
#### PASS 53 minutes
### 2025-04-23
#### PASS 53 minutes
### 2025-04-24
#### PASS 51 minutes
### 2025-04-25
#### PASS 52 minutes
### 2025-04-26
#### PASS 53 minutes
### 2025-04-27
#### PASS an hour
### 2025-04-28
#### PASS 54 minutes
### 2025-04-29
#### PASS 51 minutes
### 2025-04-30
#### PASS 58 minutes
### 2025-05-01
#### PASS 53 minutes
#### PASS 51 minutes
#### PASS 51 minutes
#### PASS 53 minutes
#### PASS 49 minutes
#### PASS 50 minutes
#### PASS 52 minutes
### 2025-05-02
#### PASS 57 minutes
### 2025-05-03
#### PASS 53 minutes
### 2025-05-04
#### PASS 56 minutes
### 2025-05-05
#### PASS 53 minutes
### 2025-05-06
#### PASS 54 minutes
### 2025-05-07
#### TIMEOUT 4 hours
```
2025-05-07T00:57:29.5912013Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-07T00:58:41.7135521Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-07T00:59:31.7078568Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-07T00:59:31.7079871Z     pre_check.go:40: Time before creating cluster: 2025-05-07T00:59:31.707571702Z, ProjectID: 681aaff9ae6e67427d723e09, Cluster name: test-acc-tf-c-3494852835272862056
2025-05-07T04:12:01.1099251Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-07T04:12:01.1100333Z     resource_advanced_cluster_test.go:183: Step 3/5 error: Error running apply: exit status 1
2025-05-07T04:12:01.1100854Z         
2025-05-07T04:12:01.1102028Z         Error: error updating advanced cluster (test-acc-tf-c-3494852835272862056): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-05-07T04:12:01.1102975Z         
2025-05-07T04:12:01.1103301Z           with mongodbatlas_advanced_cluster.test,
2025-05-07T04:12:01.1103936Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-07T04:12:01.1104549Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-07T04:12:01.1105111Z         
2025-05-07T05:28:19.3320691Z panic: test timed out after 5h0m0s
2025-05-07T05:28:19.3321335Z 	running tests:
2025-05-07T05:28:19.3320691Z panic: test timed out after 5h0m0s
2025-05-07T05:28:19.3321335Z 	running tests:
2025-05-07T05:28:19.3322110Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h29m38s)
```
### 2025-05-08
#### PASS 56 minutes
### 2025-05-09
#### PASS 50 minutes
### 2025-05-10
#### PASS 55 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:09.6791434Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:09.7403946Z     shared_resource.go:84: 
2025-05-11T00:30:09.7405553Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:09.7407824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:09.7409687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:09.7411748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:09.7413855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:189
2025-05-11T00:30:09.7416060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:183
2025-05-11T00:30:09.7416933Z         	Error:      	Received unexpected error:
2025-05-11T00:30:09.7417835Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.7418489Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-11T00:30:09.7419597Z         	Messages:   	Project creation failed: test-acc-tf-p-2868224316202910062, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:09.7420394Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (0.06s)
```
### 2025-05-12
#### PASS 51 minutes
### 2025-05-13
#### PASS 56 minutes
#### PASS 51 minutes
### 2025-05-14
#### PASS 55 minutes
### 2025-05-15
#### PASS 55 minutes
### 2025-05-16
#### PASS 53 minutes
### 2025-05-17
#### PASS 54 minutes
### 2025-05-18
#### PASS 56 minutes
### 2025-05-19
#### PASS 55 minutes
### 2025-05-20
#### PASS 53 minutes
### 2025-05-21
#### PASS 55 minutes
### 2025-05-22
#### PASS 53 minutes
### 2025-05-23
#### PASS 53 minutes
### 2025-05-24
#### PASS 51 minutes
### 2025-05-25
#### PASS 54 minutes
### 2025-05-26
#### PASS 52 minutes
### 2025-05-27
#### PASS 51 minutes
### 2025-05-28
#### PASS 50 minutes
#### PASS 54 minutes
#### PASS 57 minutes
### 2025-05-29
#### PASS 58 minutes
#### PASS 50 minutes
### 2025-05-30
#### PASS 2 hours
#### PASS 57 minutes
### 2025-05-31
#### FAIL 3 hours
```
2025-05-31T01:05:08.1223963Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T01:06:19.0403334Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T01:06:24.0501227Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T01:06:24.0503227Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:06:24.049827342Z, ProjectID: 683a55c4ebf07c11d4e96ebe, Cluster name: test-acc-tf-c-7738533136511739725
2025-05-31T04:16:35.1171669Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-05-31T04:16:35.1172688Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-05-31T04:16:35.1173356Z         
2025-05-31T04:16:35.1174859Z         Error: error updating advanced cluster (test-acc-tf-c-7738533136511739725): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-05-31T04:16:35.1175934Z         
2025-05-31T04:16:35.1176470Z           with mongodbatlas_advanced_cluster.test,
2025-05-31T04:16:35.1177537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-31T04:16:35.1178533Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-05-31T04:16:35.1179033Z         
2025-05-31T04:19:26.3087757Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11588.85s)
```
### 2025-06-01
#### FAIL 3 hours
```
2025-06-01T01:08:01.0029229Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T01:09:44.9653287Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T01:10:14.9451221Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T01:10:14.9453619Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:10:14.944782154Z, ProjectID: 683ba7f12ebc1806778a3c11, Cluster name: test-acc-tf-c-4643669096242730161
2025-06-01T04:21:34.9180449Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T04:21:34.9181300Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T04:21:34.9181972Z         
2025-06-01T04:21:34.9183400Z         Error: error updating advanced cluster (test-acc-tf-c-4643669096242730161): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-01T04:21:34.9184283Z         
2025-06-01T04:21:34.9184842Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T04:21:34.9185584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T04:21:34.9186322Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T04:21:34.9186851Z         
2025-06-01T04:25:06.5035995Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11723.26s)
```
#### FAIL 3 hours
```
2025-06-01T05:17:46.3848004Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T05:18:55.5923949Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T05:19:30.5954312Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T05:19:30.5957447Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:19:30.595057445Z, ProjectID: 683be27a7bf9cf70212c56a3, Cluster name: test-acc-tf-c-1426473848550887832
2025-06-01T08:30:51.0800339Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T08:30:51.0801474Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T08:30:51.0802164Z         
2025-06-01T08:30:51.0804224Z         Error: error updating advanced cluster (test-acc-tf-c-1426473848550887832): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-01T08:30:51.0805255Z         
2025-06-01T08:30:51.0805742Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T08:30:51.0806722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T08:30:51.0807639Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T08:30:51.0808118Z         
2025-06-01T08:34:22.6745326Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11728.39s)
```
#### FAIL 3 hours
```
2025-06-01T09:27:08.5438519Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T09:28:31.6428918Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T09:28:36.6551071Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T09:28:36.6552774Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:28:36.654739831Z, ProjectID: 683c1cec7bf9cf70212cf2b5, Cluster name: test-acc-tf-c-4839286479356727939
2025-06-01T12:39:58.2765714Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T12:39:58.2766812Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T12:39:58.2767490Z         
2025-06-01T12:39:58.2768409Z         Error: error updating advanced cluster (test-acc-tf-c-4839286479356727939): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-01T12:39:58.2769182Z         
2025-06-01T12:39:58.2769743Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T12:39:58.2770756Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T12:39:58.2771371Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T12:39:58.2771692Z         
2025-06-01T12:43:30.3965791Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11700.06s)
```
#### FAIL 3 hours
```
2025-06-01T13:36:23.4548872Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T13:37:35.7377144Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T13:37:40.7357618Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T13:37:40.7364099Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:37:40.735501759Z, ProjectID: 683c57577bf9cf70212d5670, Cluster name: test-acc-tf-c-3588568796900784680
2025-06-01T16:49:18.7695757Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T16:49:18.7696863Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T16:49:18.7697358Z         
2025-06-01T16:49:18.7698701Z         Error: error updating advanced cluster (test-acc-tf-c-3588568796900784680): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-01T16:49:18.7699552Z         
2025-06-01T16:49:18.7699924Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T16:49:18.7700612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T16:49:18.7701239Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T16:49:18.7701802Z         
2025-06-01T16:52:50.7165558Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11717.18s)
```
#### FAIL 3 hours
```
2025-06-01T17:45:30.4386663Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T17:46:42.8839462Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T17:47:22.8881016Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T17:47:22.8882920Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:47:22.887737584Z, ProjectID: 683c91bacc8f0935c7c32d05, Cluster name: test-acc-tf-c-5300586162980784550
2025-06-01T20:57:34.4254256Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T20:57:34.4255276Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-01T20:57:34.4255716Z         
2025-06-01T20:57:34.4256703Z         Error: error updating advanced cluster (test-acc-tf-c-5300586162980784550): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-01T20:57:34.4257690Z         
2025-06-01T20:57:34.4258028Z           with mongodbatlas_advanced_cluster.test,
2025-06-01T20:57:34.4258684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-01T20:57:34.4259276Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-01T20:57:34.4259593Z         
2025-06-01T21:01:07.3954097Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11667.35s)
```
#### FAIL 3 hours
```
2025-06-01T21:52:45.7890100Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T21:54:01.2717971Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T21:54:46.2503308Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-01T21:54:46.2505290Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:54:46.250005623Z, ProjectID: 683ccbad7bf9cf70212e2c98, Cluster name: test-acc-tf-c-1644586197046809596
2025-06-02T01:06:34.4691408Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:06:34.4692558Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T01:06:34.4693282Z         
2025-06-02T01:06:34.4694312Z         Error: error updating advanced cluster (test-acc-tf-c-1644586197046809596): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-02T01:06:34.4695301Z         
2025-06-02T01:06:34.4695659Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T01:06:34.4697026Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T01:06:34.4697676Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T01:06:34.4697998Z         
2025-06-02T01:10:07.8306279Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11768.36s)
```
### 2025-06-02
#### FAIL 3 hours
```
2025-06-02T01:06:43.5907530Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:08:04.0057198Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:08:09.0064053Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T01:08:09.0066697Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:08:09.006123406Z, ProjectID: 683cf923cc8f0935c7c3ee14, Cluster name: test-acc-tf-c-90623553132414277
2025-06-02T04:22:18.0809155Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T04:22:18.0810256Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T04:22:18.0811026Z         
2025-06-02T04:22:18.0812416Z         Error: error updating advanced cluster (test-acc-tf-c-90623553132414277): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-02T04:22:18.0813088Z         
2025-06-02T04:22:18.0813435Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T04:22:18.0814431Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T04:22:18.0815057Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T04:22:18.0815385Z         
2025-06-02T04:25:10.7565710Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11829.48s)
```
#### FAIL 3 hours
```
2025-06-02T02:05:45.6902255Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T02:07:09.8477677Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T02:07:14.8486562Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T02:07:14.8488787Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:07:14.847975713Z, ProjectID: 683d06f9cc8f0935c7c43873, Cluster name: test-acc-tf-c-1352349844885324831
2025-06-02T05:22:30.5161532Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T05:22:30.5162643Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T05:22:30.5163275Z         
2025-06-02T05:22:30.5164222Z         Error: error updating advanced cluster (test-acc-tf-c-1352349844885324831): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-02T05:22:30.5165155Z         
2025-06-02T05:22:30.5165569Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T05:22:30.5166340Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T05:22:30.5166941Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T05:22:30.5167251Z         
2025-06-02T05:25:23.0566739Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11894.77s)
```
#### FAIL 3 hours
```
2025-06-02T06:18:08.5609913Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T06:19:34.2069163Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T06:20:44.2230884Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T06:20:44.2232779Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:20:44.222757318Z, ProjectID: 683d42207bf9cf70212f441d, Cluster name: test-acc-tf-c-5555426504046775705
2025-06-02T09:31:00.6060553Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-02T09:31:00.6061572Z     resource_advanced_cluster_test.go:186: Step 3/5 error: Error running apply: exit status 1
2025-06-02T09:31:00.6062089Z         
2025-06-02T09:31:00.6063410Z         Error: error updating advanced cluster (test-acc-tf-c-5555426504046775705): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-06-02T09:31:00.6064149Z         
2025-06-02T09:31:00.6064635Z           with mongodbatlas_advanced_cluster.test,
2025-06-02T09:31:00.6065419Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-02T09:31:00.6066119Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-02T09:31:00.6066658Z         
2025-06-02T09:34:32.6083755Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11700.10s)
```
### 2025-06-03
#### PASS 54 minutes
### 2025-06-04
#### PASS 54 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:35:24.5410428Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:42.8269455Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:47.8158368Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:35:47.8164413Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:35:47.815621316Z, ProjectID: 6840e64cc939f2741325293e, Cluster name: test-acc-tf-c-2766696265530534751
2025-06-05T00:35:47.8563756Z    test_working_directory=/tmp/plugintest2191359256
2025-06-05T00:38:49.9171825Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-06-05T00:38:49.9172661Z     resource_advanced_cluster_test.go:186: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:38:49.9173085Z         
2025-06-05T00:38:49.9175622Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e64cc939f2741325293e/clusters/test-acc-tf-c-2766696265530534751 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:49.9176850Z         
2025-06-05T00:38:49.9177195Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:38:49.9177848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:38:49.9178438Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:38:49.9178753Z         
2025-06-05T00:38:49.9588743Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (189.85s)
```
### 2025-06-06
#### PASS 2 hours
### 2025-06-07
#### PASS 52 minutes
### 2025-06-08
#### PASS 54 minutes
### 2025-06-09
#### PASS an hour
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 53 minutes
#### PASS an hour
### 2025-06-12
#### PASS 55 minutes
### 2025-06-13
#### PASS 54 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 56 minutes
### 2025-06-16
#### PASS an hour
### 2025-06-17
#### PASS 55 minutes
### 2025-06-18
#### PASS 56 minutes
#### PASS 53 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 55 minutes
### 2025-06-21
#### PASS 52 minutes
### 2025-06-22
#### PASS 52 minutes
### 2025-06-23
#### PASS 51 minutes
### 2025-06-24
#### PASS an hour
### 2025-06-25
#### PASS 53 minutes
### 2025-06-26
#### PASS 54 minutes
### 2025-06-27
#### PASS an hour
### 2025-06-28
#### PASS 54 minutes
### 2025-06-29
#### PASS 58 minutes
### 2025-06-30
#### PASS 55 minutes
### 2025-07-01
#### PASS 50 minutes
#### PASS 54 minutes
#### PASS 52 minutes
#### PASS 54 minutes
#### PASS an hour
### 2025-07-02
#### PASS 52 minutes
### 2025-07-03
#### PASS 54 minutes
### 2025-07-04
#### PASS 54 minutes
### 2025-07-05
#### PASS 53 minutes
### 2025-07-06
#### PASS 55 minutes
### 2025-07-07
#### PASS 50 minutes
### 2025-07-08
#### PASS an hour
### 2025-07-09
#### PASS 52 minutes