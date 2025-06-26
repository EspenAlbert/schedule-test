# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 24 TestRuns in dev, qa from 2025-06-05 to 2025-06-26 from master branch: 1 unique tests, PASS(x 23) FAIL
Success rate: 95.83%

## Timeline
2025-05-27: MISSING
2025-05-28: MISSING
2025-05-29: MISSING
2025-05-30: MISSING
2025-05-31: MISSING
2025-06-01: MISSING
2025-06-02: MISSING
2025-06-03: MISSING
2025-06-04: MISSING
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:32:19.8736614Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-05T00:32:19.8737937Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-1972557385402554396
2025-06-05T00:32:19.8739518Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-05T00:32:19.8740713Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:48.054397222Z, ProjectID: 6840e4b8161ca93c1f051c51, Cluster name: test-acc-tf-c-7332004579219249592
2025-06-05T00:32:19.8752664Z    test_terraform_path=/home/runner/work/_temp/cdf15d4c-605e-4ab6-8fa3-f3aec746a085/terraform test_working_directory=/tmp/plugintest2041682081 test_name=TestAccStreamAccountDetailsDS_basic test_step_number=1
2025-06-05T00:32:19.8754147Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:19.8754571Z         
2025-06-05T00:32:19.8756301Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c51/clusters/test-acc-tf-c-7332004579219249592 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:19.8757504Z         
2025-06-05T00:32:19.8757891Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:19.8758626Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:19.8759302Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:19.8759664Z         
2025-06-05T00:32:19.8759944Z --- FAIL: TestAccStreamAccountDetailsDS_basic (189.50s)
```
2025-06-06: MISSING
### 2025-06-07
#### PASS 13 minutes
```
2025-06-07T00:42:09.8364612Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-07T00:42:09.8365979Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-7550975751203956687
2025-06-07T00:42:09.8367076Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-07T00:42:09.8368206Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:28:43.514441589Z, ProjectID: 684387b4bf49d05598c141b1, Cluster name: test-acc-tf-c-4215605321982530071
2025-06-07T00:42:09.8369023Z --- PASS: TestAccStreamAccountDetailsDS_basic (812.81s)
```
### 2025-06-08
#### PASS 13 minutes
```
2025-06-08T00:45:33.3292553Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-08T00:45:33.3295789Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-3411475541763180426
2025-06-08T00:45:33.3296931Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-08T00:45:33.3298019Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:32:07.356920064Z, ProjectID: 6844da0169401b3bb3c3611a, Cluster name: test-acc-tf-c-6033081402132064506
2025-06-08T00:45:33.3299191Z --- PASS: TestAccStreamAccountDetailsDS_basic (812.00s)
```
### 2025-06-09
#### PASS 11 minutes
```
2025-06-09T00:42:47.0158846Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-09T00:42:47.0162035Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-7477650399224923174
2025-06-09T00:42:47.0163223Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-09T00:42:47.0164104Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:31:00.136288754Z, ProjectID: 68462b3de21315547b3604a7, Cluster name: test-acc-tf-c-186980988506138392
2025-06-09T00:42:47.0164830Z --- PASS: TestAccStreamAccountDetailsDS_basic (713.47s)
```
### 2025-06-10
#### PASS 22 minutes
```
2025-06-10T01:00:23.7038310Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-10T01:00:23.7039395Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-4256400830800616695
2025-06-10T01:00:23.7040195Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-10T01:00:23.7042575Z     pre_check.go:40: Time before creating cluster: 2025-06-10T00:37:56.48887051Z, ProjectID: 68477e5d9fcc7665ab8309df, Cluster name: test-acc-tf-c-8826683281715266258
2025-06-10T01:00:23.7043290Z --- PASS: TestAccStreamAccountDetailsDS_basic (1353.94s)
```
### 2025-06-11
#### PASS 12 minutes
```
2025-06-11T00:41:01.0634379Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-11T00:41:01.0637693Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-4960642997830600359
2025-06-11T00:41:01.0638749Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-11T00:41:01.0639984Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:28:45.424743529Z, ProjectID: 6848cdb669b57d1e7dbaf0d3, Cluster name: test-acc-tf-c-8181567341091126124
2025-06-11T00:41:01.0640898Z --- PASS: TestAccStreamAccountDetailsDS_basic (742.55s)
```
#### PASS 13 minutes
```
2025-06-11T07:50:15.7458935Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-11T07:50:15.7461896Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-3147622921292655909
2025-06-11T07:50:15.7462938Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-11T07:50:15.7464286Z     pre_check.go:40: Time before creating cluster: 2025-06-11T07:37:17.003479692Z, ProjectID: 6849322671e0a97458c8a26c, Cluster name: test-acc-tf-c-1670767596836826148
2025-06-11T07:50:15.7465130Z --- PASS: TestAccStreamAccountDetailsDS_basic (785.46s)
```
### 2025-06-12
#### PASS 14 minutes
```
2025-06-12T00:42:41.3040015Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-12T00:42:41.3041127Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-2405846072833119182
2025-06-12T00:42:41.3041979Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-12T00:42:41.3042938Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:28:31.763915925Z, ProjectID: 684a1f285c025329ee514d22, Cluster name: test-acc-tf-c-1013853824471545428
2025-06-12T00:42:41.3043645Z --- PASS: TestAccStreamAccountDetailsDS_basic (856.26s)
```
2025-06-13: MISSING
### 2025-06-14
#### PASS 13 minutes
```
2025-06-14T00:41:46.4409806Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-14T00:41:46.4410764Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-6443558911265509812
2025-06-14T00:41:46.4411619Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-14T00:41:46.4414462Z     pre_check.go:40: Time before creating cluster: 2025-06-14T00:28:07.091357746Z, ProjectID: 684cc20f25b50457df299aa6, Cluster name: test-acc-tf-c-3002614049495251537
2025-06-14T00:41:46.4415227Z --- PASS: TestAccStreamAccountDetailsDS_basic (826.86s)
```
### 2025-06-15
#### PASS 13 minutes
```
2025-06-15T00:45:01.8826809Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-15T00:45:01.8827952Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-8812889141828164022
2025-06-15T00:45:01.8828808Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-15T00:45:01.8829705Z     pre_check.go:40: Time before creating cluster: 2025-06-15T00:32:00.793395875Z, ProjectID: 684e147a83e3896e131ad26d, Cluster name: test-acc-tf-c-1343232018708270130
2025-06-15T00:45:01.8830446Z --- PASS: TestAccStreamAccountDetailsDS_basic (787.16s)
```
### 2025-06-16
#### PASS 13 minutes
```
2025-06-16T00:43:03.9091865Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-16T00:43:03.9100480Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-7872290722027813235
2025-06-16T00:43:03.9129763Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-16T00:43:03.9131736Z     pre_check.go:40: Time before creating cluster: 2025-06-16T00:30:07.877515984Z, ProjectID: 684f65888f295e188b9ec2d3, Cluster name: test-acc-tf-c-8616401134736329325
2025-06-16T00:43:03.9133187Z --- PASS: TestAccStreamAccountDetailsDS_basic (782.48s)
```
### 2025-06-17
#### PASS 13 minutes
```
2025-06-17T00:41:56.7047246Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-17T00:41:56.7050255Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-4733597309691748825
2025-06-17T00:41:56.7051109Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-17T00:41:56.7051961Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:29:00.206466005Z, ProjectID: 6850b6c56200565f4c9cf5c5, Cluster name: test-acc-tf-c-8416583860156422608
2025-06-17T00:41:56.7052664Z --- PASS: TestAccStreamAccountDetailsDS_basic (783.30s)
```
### 2025-06-18
#### PASS 13 minutes
```
2025-06-18T00:42:45.2818254Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-18T00:42:45.2819195Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-1392299968513672800
2025-06-18T00:42:45.2820023Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-18T00:42:45.2822269Z     pre_check.go:40: Time before creating cluster: 2025-06-18T00:29:13.250120472Z, ProjectID: 68520852e8055c11bb5dae36, Cluster name: test-acc-tf-c-4718333616073313655
2025-06-18T00:42:45.2822994Z --- PASS: TestAccStreamAccountDetailsDS_basic (818.50s)
```
#### PASS 12 minutes
```
2025-06-18T07:41:22.8827099Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-18T07:41:22.8829111Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-8558181981671649018
2025-06-18T07:41:22.8833050Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-18T07:41:22.8880564Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:29:01.666180619Z, ProjectID: 68526ab64a1a606c8b2e93d6, Cluster name: test-acc-tf-c-7706366872253756111
2025-06-18T07:41:22.8885380Z --- PASS: TestAccStreamAccountDetailsDS_basic (747.77s)
```
### 2025-06-19
#### PASS 12 minutes
```
2025-06-19T00:41:33.8691805Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-19T00:41:33.8694046Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-2548046101547903594
2025-06-19T00:41:33.8695835Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-19T00:41:33.8697768Z     pre_check.go:40: Time before creating cluster: 2025-06-19T00:29:18.28953741Z, ProjectID: 685359d7cd32be2bdf88b541, Cluster name: test-acc-tf-c-1663978346200658246
2025-06-19T00:41:33.8699116Z --- PASS: TestAccStreamAccountDetailsDS_basic (742.52s)
```
### 2025-06-20
#### PASS 12 minutes
```
2025-06-20T00:41:10.9332143Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-20T00:41:10.9335019Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-8906963945841664080
2025-06-20T00:41:10.9335851Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-20T00:41:10.9336724Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:28:43.641492968Z, ProjectID: 6854ab34e16f343ef1dd1ca7, Cluster name: test-acc-tf-c-3878034109560494741
2025-06-20T00:41:10.9337422Z --- PASS: TestAccStreamAccountDetailsDS_basic (754.82s)
```
### 2025-06-21
#### PASS 12 minutes
```
2025-06-21T00:40:39.0152592Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-21T00:40:39.0155125Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-4158073642201090436
2025-06-21T00:40:39.0156002Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-21T00:40:39.0156920Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:28:31.458918941Z, ProjectID: 6855fca9f3e6555d2acb7ca2, Cluster name: test-acc-tf-c-6825083024077387597
2025-06-21T00:40:39.0157667Z --- PASS: TestAccStreamAccountDetailsDS_basic (733.71s)
```
### 2025-06-22
#### PASS 12 minutes
```
2025-06-22T00:44:08.9059381Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-22T00:44:08.9060459Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-6861213420915996815
2025-06-22T00:44:08.9061437Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-22T00:44:08.9064107Z     pre_check.go:40: Time before creating cluster: 2025-06-22T00:31:48.740791645Z, ProjectID: 68574eedaf7a0954e84ad7a1, Cluster name: test-acc-tf-c-46602249253078755
2025-06-22T00:44:08.9064923Z --- PASS: TestAccStreamAccountDetailsDS_basic (747.48s)
```
### 2025-06-23
#### PASS 12 minutes
```
2025-06-23T00:43:28.1695225Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-23T00:43:28.1696299Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-5331766824159297039
2025-06-23T00:43:28.1697283Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-23T00:43:28.1699711Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:31:06.444351943Z, ProjectID: 6858a043ee34e36cf9c50468, Cluster name: test-acc-tf-c-8478043144990213666
2025-06-23T00:43:28.1700530Z --- PASS: TestAccStreamAccountDetailsDS_basic (748.91s)
```
### 2025-06-24
#### PASS 13 minutes
```
2025-06-24T00:42:21.9062758Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-24T00:42:21.9065667Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-5461479000920372324
2025-06-24T00:42:21.9066514Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-24T00:42:21.9067358Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:28:55.810912574Z, ProjectID: 6859f14122100658cf265b4b, Cluster name: test-acc-tf-c-7018349620310800444
2025-06-24T00:42:21.9068049Z --- PASS: TestAccStreamAccountDetailsDS_basic (812.19s)
```
### 2025-06-25
#### PASS 11 minutes
```
2025-06-25T00:40:53.7327170Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-25T00:40:53.7328846Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-53943460775847582
2025-06-25T00:40:53.7329872Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-25T00:40:53.7330932Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:29:16.774567577Z, ProjectID: 685b42d5bf2fcb3b443f7193, Cluster name: test-acc-tf-c-8520398210431729586
2025-06-25T00:40:53.7331796Z --- PASS: TestAccStreamAccountDetailsDS_basic (704.18s)
```
#### PASS 12 minutes
```
2025-06-25T06:53:45.1088006Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-25T06:53:45.1088948Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-1021480190629995247
2025-06-25T06:53:45.1089772Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-25T06:53:45.1092096Z     pre_check.go:40: Time before creating cluster: 2025-06-25T06:41:27.938113983Z, ProjectID: 685b9a0f50f3de5b614a3428, Cluster name: test-acc-tf-c-71820199103538394
2025-06-25T06:53:45.1092816Z --- PASS: TestAccStreamAccountDetailsDS_basic (745.51s)
```
### 2025-06-26
#### PASS 14 minutes
```
2025-06-26T00:43:15.3740986Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-26T00:43:15.3743987Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-7053483318373205628
2025-06-26T00:43:15.3745025Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-26T00:43:15.3746095Z     pre_check.go:40: Time before creating cluster: 2025-06-26T00:29:08.675942992Z, ProjectID: 685c944d1b4e2c6e5fe438ff, Cluster name: test-acc-tf-c-1295027509573007499
2025-06-26T00:43:15.3746950Z --- PASS: TestAccStreamAccountDetailsDS_basic (853.58s)
```
#### PASS 10 minutes
```
2025-06-26T04:24:25.4879203Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-06-26T04:24:25.4881801Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-1740500616628289670
2025-06-26T04:24:25.4882660Z === CONT  TestAccStreamAccountDetailsDS_basic
2025-06-26T04:24:25.4883531Z     pre_check.go:40: Time before creating cluster: 2025-06-26T04:13:58.770906931Z, ProjectID: 685cc8ff0461cf3cf519671f, Cluster name: test-acc-tf-c-5283323302438850770
2025-06-26T04:24:25.4884235Z --- PASS: TestAccStreamAccountDetailsDS_basic (633.75s)
```